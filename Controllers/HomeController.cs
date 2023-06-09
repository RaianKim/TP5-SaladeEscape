﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TP5.Models;

namespace TP5.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    
      public IActionResult Index()
    {
        return View();
    }
     public IActionResult Tutorial()
    {
           return View("Tutorial");
    }

    public IActionResult Comenzar()
    {
        int Estado;
        Estado = Escape.GetEstadoJuego();
        if(Estado != 5)
        {
        return View("Habitacion" + Estado.ToString());    
        }
        else
        {
            return View("Victoria");
        }
        
}
    

    public IActionResult Creditos()
    {
           return View("Creditos");
    }

    public IActionResult Habitacion(int sala, string clave)
    {   int Estado; 
    
        clave = clave.ToUpper();
        bool paso = Escape.ResolverSala(sala,clave);
        if(paso){
            Estado = Escape.GetEstadoJuego();

            if(Estado != 5)
            {
        
            return View("Habitacion" + Estado.ToString());
            }
            else
            {
                return View("Victoria");
            }
            
        }else{
            ViewBag.Error = "La respuesta escrita fue incorrecta";
            Estado = Escape.GetEstadoJuego();
            return View("Habitacion" + Estado.ToString());
        }


    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
