using FitMealModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices.IService
{
    public interface IJWTService
    {
        string Generate(User user);
    }
}
