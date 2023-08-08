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


        [Required]
        [MaxLength(254)]
        [RegularExpression(@"^[^\s@]+@[^\s@]+\.[^\s@]+$", ErrorMessage = "Invalid e-mail format.")]
        public string Email { get; set; }


        [Required]
        [MaxLength(30)]
        public string Username { get; set; }


        [Required]
        [MaxLength(30)]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$", ErrorMessage = "Invalid password format.")]
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
