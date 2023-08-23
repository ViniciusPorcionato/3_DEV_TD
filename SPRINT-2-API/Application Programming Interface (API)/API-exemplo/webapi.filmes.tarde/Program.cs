var builder = WebApplication.CreateBuilder(args);

//adiciona o serviço de controllers
builder.Services.AddControllers();

var app = builder.Build();

//Mapear os controllers
app.MapControllers();

app.Run();
