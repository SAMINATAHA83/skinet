using Microsoft.EntityFrameworkCore;
using Infrastructure.Data;
using API.Helpers;
using API.Middleware;
using API.Extensions;
using StackExchange.Redis;
using Infrastructure.Data.Identity;
using Microsoft.Extensions.FileProviders;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddDbContext<StoreContext>(x =>
             x.UseNpgsql(_configuration.GetConnectionString("DefaultConnection")));
            //GetConnectionString ne retourne rien
            //TODO : Investigation (Pourquoi?)
            /*services.AddDbContext<AppIdentityDbContext>(x =>
            {
                x.UseSqlite(_configuration.GetConnectionString("IdentityConnection"));
            });*/
            services.AddDbContext<AppIdentityDbContext>(x =>
            {
                x.UseNpgsql(_configuration.GetConnectionString("IdentityConnection"));
            });


            //Redis
            services.AddSingleton<IConnectionMultiplexer>(c =>
            {
                var configuration = ConfigurationOptions.Parse("localhost", true);
                return ConnectionMultiplexer.Connect(configuration);
            });

            services.AddApplicationServcies();
            services.AddIdentityServices(_configuration);
            services.AddSwaggerDocumentation();
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");

                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ExceptionMiddleware>();
            app.UseSwaggerDocumentation();
            app.UseStatusCodePagesWithReExecute("/errors/{0}");
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles(); //pour l'affichage des images
            app.UseStaticFiles(new StaticFileOptions //on a deplace les images dans le dossier content
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Content")),
                RequestPath = "/content"
            });
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors("CorsPolicy"); //pour la configuration des clients (Angular)
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fullback"); // Fullback
            });
        }
    }
}
