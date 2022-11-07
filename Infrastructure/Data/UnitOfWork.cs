using Core.Entities;
using Core.Interfaces;
using System.Collections;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext _context;
        private Hashtable _respositories;

        public UnitOfWork(StoreContext context)
        {
            _context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            if(_respositories == null) _respositories = new Hashtable();

            var type = typeof(TEntity).Name;

            if (!_respositories.ContainsKey(type))
            {
                var respositoryType = typeof(GenericRepository<>);
                var respositoryInstance = Activator.CreateInstance(respositoryType.MakeGenericType(typeof(TEntity)), _context);

                _respositories.Add(type, respositoryInstance);
            }

            return (IGenericRepository<TEntity>) _respositories[type];
        }
    }
}
