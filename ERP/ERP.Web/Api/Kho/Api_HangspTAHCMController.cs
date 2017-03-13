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

namespace ERP.Web.Api.Kho
{
    public class Api_HangspTAHCMController : ApiController
    {
        private ERP_DATABASEEntities db = new ERP_DATABASEEntities();

        // GET: api/Api_HangspTAHCM
        public List<HH_NHOM_VTHH> GetHH_NHOM_VTHH()
            {
                var vData = db.HH_NHOM_VTHH;
                var result = vData.ToList().Select(x => new HH_NHOM_VTHH()
                {
                    MA_NHOM_HANG_CHI_TIET = x.MA_NHOM_HANG_CHI_TIET,
                    CHUNG_LOAI_HANG = x.CHUNG_LOAI_HANG,
                    MA_NHOM_HANG_CHA = x.MA_NHOM_HANG_CHA,
                    GHI_CHU = x.GHI_CHU,
                }).ToList();
                return result;
            }

        // GET: api/Api_HangspTAHCM/5
        [ResponseType(typeof(HH_NHOM_VTHH))]
        public IHttpActionResult GetHH_NHOM_VTHH(string id)
        {
            HH_NHOM_VTHH HH_NHOM_VTHH = db.HH_NHOM_VTHH.Find(id);
            if (HH_NHOM_VTHH == null)
            {
                return NotFound();
            }

            return Ok(HH_NHOM_VTHH);
        }

        // PUT: api/Api_HangspTAHCM/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHH_NHOM_VTHH(string id, HH_NHOM_VTHH HH_NHOM_VTHH)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != HH_NHOM_VTHH.MA_NHOM_HANG_CHI_TIET)
            {
                return BadRequest();
            }

            db.Entry(HH_NHOM_VTHH).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HH_NHOM_VTHHExists(id))
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

        // POST: api/Api_HangspTAHCM
        [ResponseType(typeof(HH_NHOM_VTHH))]
        public IHttpActionResult PostHH_NHOM_VTHH(HH_NHOM_VTHH HH_NHOM_VTHH)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HH_NHOM_VTHH.Add(HH_NHOM_VTHH);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (HH_NHOM_VTHHExists(HH_NHOM_VTHH.MA_NHOM_HANG_CHI_TIET))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = HH_NHOM_VTHH.MA_NHOM_HANG_CHI_TIET }, HH_NHOM_VTHH);
        }

        // DELETE: api/Api_HangspTAHCM/5
        [ResponseType(typeof(HH_NHOM_VTHH))]
        public IHttpActionResult DeleteHH_NHOM_VTHH(string id)
        {
            HH_NHOM_VTHH HH_NHOM_VTHH = db.HH_NHOM_VTHH.Find(id);
            if (HH_NHOM_VTHH == null)
            {
                return NotFound();
            }

            db.HH_NHOM_VTHH.Remove(HH_NHOM_VTHH);
            db.SaveChanges();

            return Ok(HH_NHOM_VTHH);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HH_NHOM_VTHHExists(string id)
        {
            return db.HH_NHOM_VTHH.Count(e => e.MA_NHOM_HANG_CHI_TIET == id) > 0;
        }
    }
}