using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealDataAccess.Repository.IRepository
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }

        void Save();
    }
}
}
