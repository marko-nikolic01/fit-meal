using FitMealModels;
using FitMealServices.IService;
using FitMealUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices
{
    public class FoodAPIService : IFoodAPIService
    {
        private readonly ILogger<FoodAPIService> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _key;
        private readonly string _url;
        private readonly HttpClient _httpClient;

        public FoodAPIService(ILogger<FoodAPIService> logger, IConfiguration configuration)
        {
            this._logger = logger;
            this._configuration = configuration;
            this._key = _configuration["USDAFoodAPI:Key"];
            this._url = _configuration["USDAFoodAPI:URL"];
            this._httpClient = new HttpClient();
        }

        public async Task<string> GetFoods()
        {
            try
            {
                var requestUri = $"{_url}foods/search?api_key={_key}&query=cheese&dataType={Uri.EscapeDataString("Survey (FNDDS)")}&pageSize=1";

                var response = await _httpClient.GetAsync(requestUri);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    FoodAPIResponseConverter converter = new FoodAPIResponseConverter();
                    List<Food> foods = converter.ConvertFoodSearch(content);
                    
                    foreach (Food food in foods)
                    {
                        string log = "\nID: " + food.Id + "\nName: " + food.Name +
                            "\nNutrition: " + "\n\tEnergy: " + food.Nutrition.Energy.Amount + "\n\tProtein: " + food.Nutrition.Protein.Amount + "\n\tCarbohydrates: " + food.Nutrition.Carbohydrates.Amount + "\n\tFats: " + food.Nutrition.Fats.Amount + "\n";
                        _logger.LogInformation(log);
                    }
                    //_logger.LogInformation(content);
                    return content;
                }
                else
                {
                    // Handle API error responses here
                    return null;
                }
            }
            catch (HttpRequestException e)
            {
                // Handle network or connection errors here
                Console.WriteLine($"Error: {e.Message}");
                return null;
            }
        }
    }
}
