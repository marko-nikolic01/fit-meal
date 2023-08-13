using FitMealDataAccess.Repository.IRepository;
using FitMealModels;
using FitMealServices.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices
{
    public class SignInService : ISignInService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SignInService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public User SignIn(string emailOrUsername, string password)
        {
            User user = _unitOfWork.UserRepository.GetFirstOrDefault(u => 
                (u.Email == emailOrUsername || u.Username == emailOrUsername) && u.Password == password);
            return user;
        }
    }
}
