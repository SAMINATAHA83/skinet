using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecifiation : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecifiation(ProductSpecParams prodParams) 
            : base(x=> 
                (string.IsNullOrEmpty(prodParams.Search) || x.Name.ToLower().Contains(prodParams.Search)) &&
                (!prodParams.BrandId.HasValue || x.ProductBrandId == prodParams.BrandId) && 
                (!prodParams.TypeId.HasValue || x.ProductTypeId == prodParams.TypeId)
            )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderby(x => x.Name);
            ApplyPaging(prodParams.PageSize * (prodParams.PageIndex -1), prodParams.PageSize);

            if(!string.IsNullOrEmpty(prodParams.Sort))
            {
                switch (prodParams.Sort)
                {
                    case "priceAsc":
                       AddOrderby(p=> p.Price);
                       break;
                    case "priceDesc":
                       AddOrderbyDescending(p=> p.Price);
                       break;
                    default:
                       AddOrderby(n=> n.Name);
                       break;
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecifiation(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}