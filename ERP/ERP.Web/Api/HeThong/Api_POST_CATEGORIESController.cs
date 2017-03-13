using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ERP.Web.Models.Database;
using ERP.Web.Models.BusinessModel;

namespace ERP.Web.Api.HeThong
{
    public class Api_POST_CATEGORIESController : ApiController
    {
        private ERP_DATABASEEntities db = new ERP_DATABASEEntities();

        // GET: api/Api_POST_CATEGORIES
        public IQueryable<POST_CATEGORIES> GetPOST_CATEGORIES()
        {
            return db.POST_CATEGORIES;
        }

        // GET: api/Api_POST_CATEGORIES/5
        [ResponseType(typeof(POST_CATEGORIES))]
        public int GetPOST_CATEGORIES(string id)
        {
            POST post = db.POSTS.Where(x=>x.TIEU_DE_BAI_VIET == id).FirstOrDefault();
            
            int ma_bai_viet = post.MA_BAI_VIET;

            return ma_bai_viet;
        }

        // PUT: api/Api_POST_CATEGORIES/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPOST_CATEGORIES(int id, POST_CATEGORIES pOST_CATEGORIES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pOST_CATEGORIES.ID)
            {
                return BadRequest();
            }

            db.Entry(pOST_CATEGORIES).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!POST_CATEGORIESExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Api_POST_CATEGORIES
        [ResponseType(typeof(POST_CATEGORIES))]
        public IHttpActionResult PostPOST_CATEGORIES(post_categories pOST_CATEGORIES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            POST post = db.POSTS.Where(x => x.TIEU_DE_BAI_VIET == pOST_CATEGORIES.tieu_de_bai_viet).FirstOrDefault();

            int ma_bai_viet = post.MA_BAI_VIET;
            POST_CATEGORIES p_cat = new POST_CATEGORIES();
            p_cat.MA_BAI_VIET = ma_bai_viet;
            p_cat.MA_DANH_MUC = pOST_CATEGORIES.ma_danh_muc;

            db.POST_CATEGORIES.Add(p_cat);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (POST_CATEGORIESExists(p_cat.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = p_cat.ID }, p_cat);
        }

        // DELETE: api/Api_POST_CATEGORIES/5
        [ResponseType(typeof(POST_CATEGORIES))]
        public IHttpActionResult DeletePOST_CATEGORIES(int id)
        {
            POST_CATEGORIES pOST_CATEGORIES = db.POST_CATEGORIES.Find(id);
            if (pOST_CATEGORIES == null)
            {
                return NotFound();
            }

            db.POST_CATEGORIES.Remove(pOST_CATEGORIES);
            db.SaveChanges();

            return Ok(pOST_CATEGORIES);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool POST_CATEGORIESExists(int id)
        {
            return db.POST_CATEGORIES.Count(e => e.ID == id) > 0;
        }
    }
}