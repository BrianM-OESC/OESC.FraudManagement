var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// API health check endpoint
app.MapGet("/health", () =>
    Results.Ok(new
    {
        status = "healthy",
        message = "OESC Fraud Management API is healthy",
        timestamp = DateTime.UtcNow
    }));

app.UseHttpsRedirection();

app.Run();
