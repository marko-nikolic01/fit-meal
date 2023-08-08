using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels.DTO
{
    public class SignUpDTO
    {
        [Required(ErrorMessage = "E-mail is required.")]
        [MaxLength(254)]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^[^\s@]+@[^\s@]+\.[^\s@]+$", ErrorMessage = "Invalid e-mail format.")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Username password is required.")]
        [MaxLength(30)]
        public string Username { get; set; }


        [Required(ErrorMessage = "Password is required.")]
        [MaxLength(30)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$", 
            ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.")]
        [Compare("RepeatPassword", ErrorMessage = "Passwords do not match.")]
        public string Password { get; set; }


        [Required(ErrorMessage = "Repeat password is required.")]
        [MaxLength(30)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$", 
            ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.")]
        [Compare("Password", ErrorMessage = "Passwords do not match.")]
        public string RepeatPassword { get; set; }


        public SignUpDTO()
        {
            this.Email = "";
            this.Username = "";
            this.Password = "";
            this.RepeatPassword = "";
        }
    }
}
