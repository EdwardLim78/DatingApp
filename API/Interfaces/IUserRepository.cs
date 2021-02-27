using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        // Task<bool> SaveAllAsync();

        Task<IEnumerable<AppUser>> GetUserAsync();

        Task<AppUser> GetUserByIdAsync(int id);

        Task<AppUser> GetUserByUserNameAsync(string username, bool isCurrentUser = false); 

        Task<PagedList<MemberDto>>GetMembersAsync(UserParams userParams);

        Task<MemberDto> GetMemberAsync(string username, bool isCurrentUser);

        Task<AppUser> GetUserByPhotoId(int photoId);

        Task<string>GetUserGender(string username);
        
    }
}