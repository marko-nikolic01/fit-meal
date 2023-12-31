﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels
{
    public class Nutrient
    {
        [Key]
        public int Id { get; set; }


        [Required(ErrorMessage = "Name is required.")]
        [MaxLength(100)]
        public string Name { get; set; }


        [Required(ErrorMessage = "Unit is required.")]
        [MaxLength(10)]
        public string Unit { get; set; }


        [Required(ErrorMessage = "Amount is required.")]
        [Range(0, 10000)]
        public double Amount { get; set; }


        public Nutrient(int id, string name, string unit, double amount)
        {
            this.Id = id;
            this.Name = name;
            this.Unit = unit;
            this.Amount = amount;
        }
    }
}
