using FitMealModels;
using FitMealServices.IService;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FitMealServices
{
    public class JWTService : IJWTService
    {
        private readonly IConfiguration _configuration;
        private readonly byte[] _key;
        private readonly JwtSecurityTokenHandler _tokenHandler;

        public JWTService(IConfiguration configuration)
        {
            this._configuration = configuration;
            this._key = Encoding.ASCII.GetBytes(_configuration["JWTKey"]);
            this._tokenHandler = new JwtSecurityTokenHandler();
        }

        public string Generate(User user)
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Username)
            }),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(_key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = _tokenHandler.CreateToken(tokenDescriptor);
            return _tokenHandler.WriteToken(token);
        }

        public bool Validate(string token) 
        {
            var validationParameters = new TokenValidationParameters
            {
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(_configuration["JWTKey"]))
            };

            try
            {
                SecurityToken validatedToken;
                var principal = _tokenHandler.ValidateToken(token, validationParameters, out validatedToken);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
