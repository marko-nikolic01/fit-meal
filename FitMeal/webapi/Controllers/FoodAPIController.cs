using FitMealModels;
using FitMealModels.DTO;
using FitMealServices.IService;
using Microsoft.AspNetCore.Mvc;

namespace FitMealAPI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class FoodPIController : ControllerBase
    {
        private readonly IFoodAPIService _foodAPIService;
        public FoodPIController(IFoodAPIService foodAPIService)
        {
            this._foodAPIService = foodAPIService;
        }


        [HttpPost("signup")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [Produces("application/json")]
        public async Task<ActionResult> SignUp([FromBody] SignUpDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (_signUpService.IsUsernameOrEmailTaken(dto.Username, dto.Email))
            {
                return Conflict(new { Message = "Username or email is already in use." });
            }

            User user = new User(dto.Email, dto.Username, dto.Password);
            _signUpService.SignUp(user);
            string token = _JWTService.Generate(user);
            return Ok(new { Token = token });
        }
    }
}
