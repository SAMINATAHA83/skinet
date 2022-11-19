namespace API.Dtos
{
    public class OrderDto
    {
        public string BasketId { get; set; }
        public int DelivreyMethodId { get; set; } 
        public AddressDto ShipToAddress { get; set; }
    }
}
