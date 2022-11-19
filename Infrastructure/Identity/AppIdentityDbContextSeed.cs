using Microsoft.AspNetCore.Identity;
using Core.Entities.Identity;
namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAync(UserManager<AppUser> userManger)
        {
            if (!userManger.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Sam",
                    Email = "samatar.yacin@gmail.com",
                    UserName = "samatar.yacin",
                    Address = new Address
                    {
                        FirstName = "Samatar",
                        LastName = "Yacin",
                        Street = "2e rue Est",
                        City = "Amos",
                        State = "Québec",
                        ZipCode = "j9t 2e3"
                    }
                };

                await userManger.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
