using FitMealDataAccess.Context;
using FitMealDataAccess.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealDataAccess.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext _db;
        public IUserRepository UserRepository { get; private set; }

        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
            UserRepository = new UserRepository(_db);
        }

        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
