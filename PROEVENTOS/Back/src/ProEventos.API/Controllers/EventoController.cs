using System.Reflection.Emit;
using System.Runtime.CompilerServices;
using System.Diagnostics.Tracing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;
using System.Collections;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
          
        public IEnumerable<Evento> _evento =  new Evento[]{
            new Evento(){
                EventoId = 1,
                Tema = "Angular 11 e .NET core",
                Local = "Sao Paulo",
                Lote = "1 lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                ImagemURL = "foto.jpeg"
            },
            new Evento(){
                EventoId = 2,
                Tema = "Angular 11 e suas novidades",
                Local = "Goiânia",
                Lote = "2 lote",
                QtdPessoas = 290,
                DataEvento = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy"),
                ImagemURL = "fotos.jpeg"
            }
        };
        

        public EventoController()
        {
            
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;

        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }
    }
}
