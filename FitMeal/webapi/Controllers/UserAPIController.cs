using FitMealDataAccess.Context;
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
        private readonly ApplicationDbContext _db;
        public PropertyAPIController(ILogger<PropertyAPIController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpPost]
        [Route("/signup")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<SignUpDTO>))]
        [Produces("application/json")]
        public ActionResult SignUp([FromBody] SignUpDTO user)
        {
            if (ModelState.IsValid)
            {
                _logger.LogInformation("Valid");
                return Ok(user);
            }
            _logger.LogInformation("Invalid");
            return BadRequest(user);
        }
    }
}
