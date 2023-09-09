using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels.DTO
{
    public class FoodSearchDTO
    {
        [Required(ErrorMessage = "Foods are required.")]
        public List<Food> Foods { get; set; }

        public FoodSearchDTO(List<Food> foods)
        {
            this.Foods = foods;
        }
    }
}
