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
    internal class SignInService : ISignInService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SignInService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public User SignIn(string emailOrUsername, string password)
        {
            User user = _unitOfWork.UserRepository.GetFirstOrDefault(u => new[] { u.Email, u.Username }.Contains(emailOrUsername));
            return user;
        }
    }
}
