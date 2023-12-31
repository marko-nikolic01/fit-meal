using FitMealDataAccess.Context;
using FitMealDataAccess.Repository.IRepository;
using FitMealDataAccess.Repository;
using Microsoft.EntityFrameworkCore;
using FitMealServices.IService;
using FitMealServices;
using FitMealUtilities.Converters.IConverter;
using FitMealUtilities.Converters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add database context and unit of work
builder.Services.AddDbContext<ApplicationDbContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("LocalConnection"));
});

// Add services, repositories and utilities to dependency injection
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddScoped<IJWTService, JWTService>();
builder.Services.AddScoped<ISignUpService, SignUpService>();
builder.Services.AddScoped<ISignInService, SignInService>();
builder.Services.AddScoped<IFoodAPIService, FoodAPIService>();

builder.Services.AddScoped<IFoodAPIResponseConverter, FoodAPIResponseConverter>();

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("https://localhost:3000")
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
