using System.ComponentModel.DataAnnotations;

namespace ProEventos.API.Models
{
    public class Evento
    {
        private int eventoId;
        private string tema;
        private string local;
        private string lote;
        private int qtdPessoas;
        private string dataEvento;
        private string imagemURL;

        public int EventoId { get => eventoId; set => eventoId = value; }
        public string Tema { get => tema; set => tema = value; }
        public string Local { get => local; set => local = value; }
        public string Lote { get => lote; set => lote = value; }
        public int QtdPessoas { get => qtdPessoas; set => qtdPessoas = value; }
        public string DataEvento { get => dataEvento; set => dataEvento = value; }
        public string ImagemURL { get => imagemURL; set => imagemURL = value; }
    }
}