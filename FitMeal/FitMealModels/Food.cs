using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels
{
    public class Food
    {
        [Key]
        public int Id { get; set; }


        [Required(ErrorMessage = "Name is required.")]
        [MaxLength(100)]
        public string Name { get; set; }


        [Required(ErrorMessage = "Nutrition is required.")]
        public Nutrition Nutrition { get; set; }


        public Food(int id, string name, Nutrition nutrition)
        {
            this.Id = id;
            this.Name = name;
            this.Nutrition = nutrition;
        }
    }
}
