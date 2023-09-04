using FitMealServices.IService;
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
                var requestUri = $"{_url}foods/search?api_key={_key}&query=cheese&data_type={Uri.EscapeDataString("Survey (FNDDS)")}&page_size=1";

                var response = await _httpClient.GetAsync(requestUri);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    _logger.LogInformation(content);
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
