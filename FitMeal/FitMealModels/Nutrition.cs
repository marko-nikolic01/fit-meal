using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels
{
    public class Nutrition
    {
        [Required(ErrorMessage = "Energy is required.")]
        public Nutrient Energy { get; set; }//1008


        [Required(ErrorMessage = "Protein is required.")]
        public Nutrient Protein { get; set; }//1003


        [Required(ErrorMessage = "Carbohydrates are required.")]
        public Nutrient Carbohydrates { get; set; }//1005


        [Required(ErrorMessage = "Fats are required.")]
        public Nutrient Fats { get; set; }//1004


        public Nutrition(Nutrient energy, Nutrient protein, Nutrient carbohydrates, Nutrient fats)
        {
            this.Energy = energy;
            this.Protein = protein;
            this.Carbohydrates = carbohydrates;
            this.Fats = fats;
        }
    }
}