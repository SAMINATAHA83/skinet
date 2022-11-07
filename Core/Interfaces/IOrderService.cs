using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderAsync(string buyerEmail, int delivredMethod, string basketId, Address shippingAddress);
        Task<IReadOnlyCollection<Order>> GetOrdersForUserAsync(string buyerEmail);
        Task<Order> CreateOrderByIdAsync(int id, string buyerEmail);
        Task<IReadOnlyCollection<DeliveryMethod>> GetDeliveryMethodsAsync();
    }
}
