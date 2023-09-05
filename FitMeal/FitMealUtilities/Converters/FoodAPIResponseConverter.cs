using FitMealModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Logging;
using FitMealUtilities.Converters.IConverter;

namespace FitMealUtilities.Converters
{
    public class FoodAPIResponseConverter : IFoodAPIResponseConverter
    {
        public FoodAPIResponseConverter() { }

        public List<Food> ConvertFoodSearch(string response)
        {
            JObject responseJSON = JObject.Parse(response);
            JArray foodsJSON = (JArray)responseJSON["foods"];
            List<Food> foods = ExtractFoods(foodsJSON);

            return foods;
        }

        private List<Food> ExtractFoods(JArray foodsJSON)
        {
            List<Food> foods = new List<Food>();

            foreach (JObject foodJSON in foodsJSON)
            {
                int id = (int)foodJSON["fdcId"];
                string name = (string)foodJSON["description"];
                JArray nutritionJSON = (JArray)foodJSON["foodNutrients"];
                Nutrition nutrition = ExtractNutrition(nutritionJSON);
                foods.Add(new Food(id, name, nutrition));
            }

            return foods;
        }

        private Nutrition ExtractNutrition(JArray nutritionJSON)
        {
            Nutrient energy = null, protein = null, carbohydrates = null, fats = null;

            foreach (JObject nutrientJSON in nutritionJSON)
            {
                if ((int)nutrientJSON["nutrientId"] == 1003)
                {
                    protein = ExtractNutrient(nutrientJSON);
                }
                else if ((int)nutrientJSON["nutrientId"] == 1004)
                {
                    fats = ExtractNutrient(nutrientJSON);
                }
                else if ((int)nutrientJSON["nutrientId"] == 1008)
                {
                    energy = ExtractNutrient(nutrientJSON);
                }
                else if ((int)nutrientJSON["nutrientId"] == 2000)
                {
                    carbohydrates = ExtractNutrient(nutrientJSON);
                }

                if (energy != null && protein != null && fats != null && carbohydrates != null)
                {
                    break;
                }
            }

            return new Nutrition(energy, protein, carbohydrates, fats);
        }

        private Nutrient ExtractNutrient(JObject nutrientJSON)
        {
            int id = (int)nutrientJSON["nutrientId"];
            string name = (string)nutrientJSON["nutrientName"];
            string unit = (string)nutrientJSON["unitName"];
            double amount = (double)nutrientJSON["value"];

            return new Nutrient(id, name, unit, amount);
        }
    }
}
