using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels.DTO
{
    public class SignInDTO
    {
        [Required(ErrorMessage = "E-mail or username is required.")]
        [MaxLength(254)]
        [RegularExpression(@"^[^\s@]+@[^\s@]+\.[^\s@]+$|^[a-zA-Z0-9_]+$", ErrorMessage = "Invalid e-mail or username format.")]
        public string EmailOrUsername { get; set; }


        [Required(ErrorMessage = "Password is required.")]
        [MaxLength(30)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$",
            ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.")]
        public string Password { get; set; }


        public SignInDTO()
        {
            this.EmailOrUsername = "";
            this.Password = "";
        }
    }
}
