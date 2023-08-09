using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealModels
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [Required(ErrorMessage = "E-mail is required.")]
        [MaxLength(254)]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^[^\s@]+@[^\s@]+\.[^\s@]+$", ErrorMessage = "Invalid e-mail format.")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Username is required.")]
        [MaxLength(30)]
        public string Username { get; set; }


        [Required(ErrorMessage = "Password is required.")]
        [MaxLength(30)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$", 
            ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.")]
        public string Password { get; set; }


        public User()
        {
            this.Id = 0;
            this.Email = "";
            this.Username = "";
            this.Password = "";
        }
    }
}
