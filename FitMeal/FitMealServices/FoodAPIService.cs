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
        private readonly IConfiguration _configuration;
        private readonly string _key;
        private readonly string _url;
        private readonly HttpClient _httpClient;

        public FoodAPIService(IConfiguration configuration)
        {
            this._configuration = configuration;
            this._key = _configuration["USDAFoodAPI:Key"];
            this._url = _configuration["USDAFoodAPI:URL"];
            this._httpClient = new HttpClient();
        }

        public async Task<List<Food>> GetFoods()
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

                    return foods;
                }
                else
                {
                    return null;
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Error: {e.Message}");
                return null;
            }
        }
    }
}
