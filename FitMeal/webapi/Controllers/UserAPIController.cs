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
    public class PropertyAPIController : ControllerBase
    {
        private readonly ILogger<PropertyAPIController> _logger;
        private readonly ISignUpService _signUpService;
        private readonly IJWTService _JWTService;
        public PropertyAPIController(ILogger<PropertyAPIController> logger, ISignUpService signUpService, IJWTService jWTService)
        {
            this._logger = logger;
            this._signUpService = signUpService;
            this._JWTService = jWTService;
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
                return Conflict("Username or email is already in use.");
            }

            User user = new User(dto.Email, dto.Username, dto.Password);
            _signUpService.SignUp(user);
            string token = _JWTService.Generate(user);
            _logger.LogInformation("\n\n" + token + "\n\n");
            return Ok(new { Token = token });
        }
    }
}
