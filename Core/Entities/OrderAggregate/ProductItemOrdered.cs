namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int producItemtId, string productName, string pictureUrl)
        {
            ProducItemtId = producItemtId;
            ProductName = productName;
            PictureUrl = pictureUrl;
        }

        public int ProducItemtId { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
    }
}
