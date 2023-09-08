using FitMealDataAccess.Context;
using FitMealDataAccess.Repository.IRepository;
using FitMealModels;
using FitMealModels.DTO;
using FitMealServices;
using FitMealServices.IService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace FitMealAPI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserAPIController : ControllerBase
    {
        private readonly IJWTService _JWTService;
        private readonly ISignUpService _signUpService;
        private readonly ISignInService _signInService;
        public UserAPIController(IJWTService jWTService, ISignUpService signUpService, ISignInService signInService)
        {
            this._signUpService = signUpService;
            this._JWTService = jWTService;
            this._signInService = signInService;
        }


        [HttpPost("signup")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [Produces("application/json")]
        public ActionResult SignUp([FromBody] SignUpDTO dto)
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


        [HttpPost("signin")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Produces("application/json")]
        public ActionResult SignIn([FromBody] SignInDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            User user = _signInService.SignIn(dto.EmailOrUsername, dto.Password);
            if (user == null)
            {
                return Unauthorized(new { Message = "Invalid credentials" });
            }

            string token = _JWTService.Generate(user);
            return Ok(new { Token = token });
        }
    }
}
