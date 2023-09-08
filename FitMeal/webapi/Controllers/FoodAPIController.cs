using FitMealModels;
using FitMealModels.DTO;
using FitMealServices.IService;
using Microsoft.AspNetCore.Mvc;

namespace FitMealAPI.Controllers
{
    [ApiController]
    [Route("api/foods")]
    public class FoodAPIController : ControllerBase
    {
        private readonly IFoodAPIService _foodAPIService;
        public FoodAPIController(IFoodAPIService foodAPIService)
        {
            this._foodAPIService = foodAPIService;
        }


        [HttpGet("/search")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Produces("application/json")]
        public async Task<ActionResult> Search([FromQuery(Name = "query")] string query)
        {
            if (query == "")
            {
                return BadRequest(new { Message = "Your search query can't be empty." });
            }

            List<Food> foods = await _foodAPIService.SearchFoods(query);
            return Ok(foods);
        }
    }
}
