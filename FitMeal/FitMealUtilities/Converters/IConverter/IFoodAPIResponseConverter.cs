using FitMealModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealUtilities.Converters.IConverter
{
    public interface IFoodAPIResponseConverter
    {
        List<Food> ConvertFoodSearch(string response);
    }
}
