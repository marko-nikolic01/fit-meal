using FitMealDataAccess.Repository.IRepository;
using FitMealModels;
using FitMealModels.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices.IService
{
    public interface ISignUpService
    {
        bool IsUsernameOrEmailTaken(string username, string email);
        User SignUp(User user);
    }
}
