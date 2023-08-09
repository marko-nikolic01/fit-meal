using FitMealDataAccess.Context;
using FitMealDataAccess.Repository.IRepository;
using FitMealModels;
using FitMealModels.DTO;
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
        private readonly IUnitOfWork _unitOfWork;
        public PropertyAPIController(ILogger<PropertyAPIController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        [Route("/signup")]
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

            User conflictedUser = _unitOfWork.UserRepository.GetFirstOrDefault(u =>
                u.Username == dto.Username || u.Email == dto.Email);
            if (conflictedUser != null)
            {
                return Conflict("Username or email is already in use.");
            }

            User user = new User(dto.Email, dto.Username, dto.Password);
            _unitOfWork.UserRepository.Add(user);
            _unitOfWork.Save();
            return Ok();
        }
    }
}
