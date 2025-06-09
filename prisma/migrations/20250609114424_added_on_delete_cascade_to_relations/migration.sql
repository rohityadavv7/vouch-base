-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_testimonialToOrg_fkey";

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_testimonialToOrg_fkey" FOREIGN KEY ("testimonialToOrg") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
