using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Extensions
{
    public static class UserMangerExtensions
    {
        public static async Task<AppUser> FindByUserByClaimsPrincipaleWithAddressAsync(this UserManager<AppUser> input, ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);  
            
            return await input.Users.Include(x=> x.Address).SingleOrDefaultAsync(x=> x.Email == email);
        }

        public static async Task<AppUser> FindByEmailClaimsPrincipale(this UserManager<AppUser> input, ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await input.Users.SingleOrDefaultAsync(x => x.Email == email);

        }
    }
}
