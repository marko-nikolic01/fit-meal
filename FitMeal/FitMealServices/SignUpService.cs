using FitMealDataAccess.Repository.IRepository;
using FitMealModels;
using FitMealModels.DTO;
using FitMealServices.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices
{
    public class SignUpService : ISignUpService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SignUpService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public bool IsUsernameOrEmailTaken(string username, string email)
        {
            User conflictedUser = _unitOfWork.UserRepository.GetFirstOrDefault(u => u.Username == username || u.Email == email);
            return conflictedUser != null;
        }

        public void SignUp(User user)
        {
            _unitOfWork.UserRepository.Add(user);
            _unitOfWork.Save();
        }
    }
}
