using FitMealModels;
using FitMealModels.DTO;
using FitMealServices.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;

namespace FitMealAPI.Controllers
{
    [ApiController]
    [Route("api/foods")]
    public class FoodAPIController : ControllerBase
    {
        private readonly IJWTService _JWTService;
        private readonly IFoodAPIService _foodAPIService;
        public FoodAPIController(IJWTService JWTService, IFoodAPIService foodAPIService)
        {
            this._JWTService = JWTService;
            this._foodAPIService = foodAPIService;
        }


        [HttpGet("/search")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Produces("application/json")]
        public async Task<ActionResult> Search([FromQuery(Name = "query")] string query, [FromQuery(Name = "jwt")] string token)
        {
            if (string.IsNullOrWhiteSpace(token))
            {
                return Unauthorized(new { Message = "Missing JWT token." });
            }
            if (!_JWTService.Validate(token))
            {
                return Unauthorized(new { Message = "JWT is invalid." });
            }

            if (query == "")
            {
                return BadRequest(new { Message = "Your search query can't be empty." });
            }

            List<Food> foods = await _foodAPIService.SearchFoods(query);
            return Ok(foods);
        }
    }
}
