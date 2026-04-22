import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageWrapper } from "@/components/site/PageWrapper";

// Organized by the 5 main divisions
const divisions = {
  regenerativeSciences: {
    title: "Tissue Processing and R&D",
    description: "Leading tissue processing, R&D, and regenerative medicine innovations",
    images: [
      {
        src: "/images/boredoptimism_Red_and_black_particles_in_motion_--ar_169_--sr_a58101a6-32f4-4e8d-adfc-e314a451007b_2.png",
        title: "Red & Black Particles Still",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Tiger_Bio_DNA_longevity_--ar_169_--raw_--profil_78562e61-1118-4297-9045-81df05862b7e_1.png",
        title: "DNA Longevity 1",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Tiger_Bio_DNA_longevity_--ar_169_--raw_--profil_f436266d-9082-46e1-be08-eed917d5257f_2.png",
        title: "DNA Longevity 2",
        type: "image",
      },
    ],
    videos: [
      {
        src: "/images/social_boredoptimism_particles_--ar_9151_--bs_1_--raw_--video_1_--en_e2952807-175a-44d3-a5b5-7e527dcbedd8_0.mp4",
        title: "Particles 1",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_particles_in_motion_--ar_9151_--bs_1_--raw_--vi_813b1528-646c-423d-82c6-72c70de33f51_0.mp4",
        title: "Particles in Motion",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_Red_and_black_particles_in_motion_--ar_9151_--v_a0c409ae-f545-4cfd-a374-fcdf6b8feb2f_3.mp4",
        title: "Red & Black Particles",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_Red_and_black_particles_in_motion_threads_black_97dc3275-ee47-4013-9ba6-8a8955aa809c_1.mp4",
        title: "Red & Black Particles - Threads",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_Red_and_black_particles_in_motion_threads_black_97dc3275-ee47-4013-9ba6-8a8955aa809c_3.mp4",
        title: "Red & Black Particles - Threads Alt",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_Red_and_black_particles_in_motion_--ar_9151_--v_63320e92-9802-498c-ac24-04b091cade7c_0.mp4",
        title: "Red & Black Particles Motion 1",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_Red_and_black_particles_in_motion_--ar_9151_--v_63320e92-9802-498c-ac24-04b091cade7c_1.mp4",
        title: "Red & Black Particles Motion 2",
        type: "video",
      },
    ],
  },
  donation: {
    title: "The Gift of Donation",
    description: "Honoring donors and advancing tissue donation through compassion and precision",
    images: [
      {
        src: "/images/donation-hero-dad.png",
        title: "Donation Hero",
        type: "image",
      },
      {
        src: "/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png",
        title: "Human Skin Texture",
        type: "image",
      },
      {
        src: "/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_2.png",
        title: "Human Skin Detail",
        type: "image",
      },
      {
        src: "/images/boredoptimism_innovate_--ar_169_--raw_--profile_e1dtuj2_--v_7_8ae95c00-d28b-44de-bcc4-318b0e1dcff4_0.png",
        title: "Innovate",
        type: "image",
      },
      {
        src: "/images/boredoptimism_innovate_--ar_169_--raw_--profile_e1dtuj2_--v_7_8ae95c00-d28b-44de-bcc4-318b0e1dcff4_1.png",
        title: "Innovate Alt",
        type: "image",
      },
      {
        src: "/images/boredoptimism_plan_--ar_169_--raw_--profile_e1dtuj2_--v_7_49bc8189-f1eb-4bde-a617-a0129d954c2a_3.png",
        title: "Plan",
        type: "image",
      },
      {
        src: "/images/02.png",
        title: "Abstract 02",
        type: "image",
      },
      {
        src: "/images/03.png",
        title: "Abstract 03",
        type: "image",
      },
      {
        src: "/images/06.png",
        title: "Abstract 06",
        type: "image",
      },
    ],
    videos: [
      {
        src: "/videos/donation-hero.mp4",
        title: "Donation Hero Video",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_in_motion_--ar_169_--motion_low_--video_1_c11ce9e3-00bc-416f-92d9-b5894cb5ed0e_0.mp4",
        title: "In Motion",
        type: "video",
      },
    ],
  },
  aesthetics: {
    title: "Aesthetics",
    description: "Cutting-edge aesthetic medicine for reconstruction and renewal",
    images: [
      {
        src: "/images/01.png",
        title: "Abstract 01",
        type: "image",
      },
      {
        src: "/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_8b4c0ea2-d5a3-49a0-8000-f376fcb4ea78_1.png",
        title: "Science & Aesthetics",
        type: "image",
      },
      {
        src: "/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png",
        title: "Science & Aesthetics Alt",
        type: "image",
      },
      {
        src: "/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_2.png",
        title: "Man's Eye Detail",
        type: "image",
      },
      {
        src: "/images/boredoptimism_luminesant_skin_--ar_169_--profile_e1dtuj2_--v__7f62374a-3b44-458e-a628-ac5ffada3271_0.png",
        title: "Luminescent Skin",
        type: "image",
      },
      {
        src: "/images/boredoptimism_sparkle_--ar_169_--profile_e1dtuj2_--v_7_b63e8343-3d90-4494-9e81-77e957d05a43_2.png",
        title: "Sparkle",
        type: "image",
      },
      {
        src: "/images/boredoptimism_donor_aesthetics_--ar_169_--raw_--profile_e1dtu_0aeebba8-000e-4abb-8d9d-4c9f37fe1b21_3.png",
        title: "Donor Aesthetics",
        type: "image",
      },
    ],
    videos: [
      {
        src: "/images/social_boredoptimism_beauty.mp4",
        title: "Beauty in Motion",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4",
        title: "Blink Animation",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_happy_--ar_9151_--video_1_--end_loop_6bd20c63-9924-41f6-bc39-01ab8248a90b_2.mp4",
        title: "Happy",
        type: "video",
      },
    ],
  },
  international: {
    title: "International",
    description: "Global access to advanced cell and tissue technologies",
    images: [
      {
        src: "/images/05.png",
        title: "Abstract 05",
        type: "image",
      },
      {
        src: "/images/boredoptimism_dawn_--ar_169_--profile_e1dtuj2_--v_7_512057d9-2fe4-4aa0-b777-44d899bfb812_3.png",
        title: "Dawn",
        type: "image",
      },
      {
        src: "/images/boredoptimism_rain_--ar_169_--profile_e1dtuj2_--v_7_be2aa810-f69c-4f93-8c88-5dfbf03df840_0.png",
        title: "Rain",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Sun_--ar_169_--profile_e1dtuj2_--v_7_38996edc-e54d-4ed9-9ee1-ea62b7114914_3.png",
        title: "Sun",
        type: "image",
      },
      {
        src: "/images/boredoptimism_lizard_eye_--ar_169_--raw_--profile_e1dtuj2_--v_66f37ebd-0e8d-40b4-aba2-231188b52b30_1.png",
        title: "Lizard Eye",
        type: "image",
      },
    ],
    videos: [
      {
        src: "/images/social_boredoptimism_subtle_movement_--ar_9151_--bs_1_--raw_--video__b3dc0572-b2b1-4207-a8fb-422c8d20b33f_0.mp4",
        title: "Subtle Movement",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_lizard_eye_--ar_9151_--video_1_40606bf6-3ab1-42a8-af8b-7d306e796aab_0.mp4",
        title: "Lizard Eye Motion 1",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_lizard_eye_--ar_9151_--video_1_d55ccdcd-c6ed-4a29-87e6-a9bfc98f6beb_0.mp4",
        title: "Lizard Eye Motion 2",
        type: "video",
      },
    ],
  },
  tigerBrand: {
    title: "Tiger Brand",
    description: "Our brand identity through powerful imagery and symbolism",
    images: [
      {
        src: "/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png",
        title: "Tiger Eye Close-up",
        type: "image",
      },
      {
        src: "/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png",
        title: "Tiger Eye Detail",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Tiger_Cub_--ar_169_--profile_e1dtuj2_--v_7_9325bd5c-9ae3-4d3c-bdb1-56ddc87a6fdf_1.png",
        title: "Tiger Cub",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Close_up_of_tiger_cub_fur_--ar_169_--profile_e1_fd58e7b2-8c97-4013-a715-744184f1dbff_0.png",
        title: "Tiger Cub Fur",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Close_up_of_tiger_cub_fur_--ar_169_--profile_e1_fd58e7b2-8c97-4013-a715-744184f1dbff_1.png",
        title: "Tiger Cub Fur Detail",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Close_up_of_tiger_fur_--ar_169_--profile_e1dtuj_46356b93-15a3-4b19-995c-3233fa58234b_0.png",
        title: "Tiger Fur Close-up",
        type: "image",
      },
      {
        src: "/images/boredoptimism_Close_up_of_tiger_fur_--ar_169_--profile_e1dtuj_46356b93-15a3-4b19-995c-3233fa58234b_1.png",
        title: "Tiger Fur Detail",
        type: "image",
      },
    ],
    videos: [
      {
        src: "/images/social_boredoptimism_close_up_of_Tiger_eye_--ar_9151_--bs_1_--motion_0647411b-082c-4933-9b4c-b3eee78d34ba_0.mp4",
        title: "Tiger Eye Motion 1",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_close_up_of_Tiger_eye_--ar_9151_--bs_1_--motion_1f52861c-17ce-4fa9-b1f0-72053a00d80a_0.mp4",
        title: "Tiger Eye Motion 2",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_close_up_of_Tiger_eye_--ar_9151_--bs_1_--motion_474992ac-e664-4725-b251-380477802d8a_0.mp4",
        title: "Tiger Eye Motion 3",
        type: "video",
      },
      {
        src: "/images/social_boredoptimism_close_up_of_Tiger_eye_--ar_9151_--bs_1_--motion_e9610ac7-5c0b-40be-9438-22a53b60b670_0.mp4",
        title: "Tiger Eye Motion 4",
        type: "video",
      },
    ],
  },
};

export default function GalleryPage() {
  // Calculate totals
  const totalImages = Object.values(divisions).reduce((sum, div) => sum + div.images.length, 0);
  const totalVideos = Object.values(divisions).reduce((sum, div) => sum + div.videos.length, 0);
  const totalAssets = totalImages + totalVideos;

  return (
    <PageWrapper className="relative container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32">
      {/* Header */}
      <header className="mb-12 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        <h1 className="text-h1">Site Gallery</h1>
        <p className="text-lead text-muted-foreground max-w-3xl">
          All images and videos organized by division for easy reference and management.
        </p>
      </header>

      {/* Division Sections */}
      {Object.entries(divisions).map(([key, division]) => {
        const allMedia = [...division.images, ...division.videos];
        if (allMedia.length === 0) return null;

        return (
          <section key={key} className="mb-20">
            <div className="mb-8">
              <h2 className="text-h1 font-light mb-2">
                {division.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {division.description} • {division.images.length} images, {division.videos.length} videos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMedia.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-video overflow-hidden rounded-[12px] bg-muted"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-brand text-brand-foreground rounded mb-2">
                        {item.type === "image" ? "Image" : "Video"}
                      </span>
                      <h3 className="font-display text-white text-sm font-light">
                        {item.title}
                      </h3>
                      <p
                        className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-xs font-mono text-white/60"
                        title={item.src}
                      >
                        {item.src}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Stats Footer */}
      <div className="pt-8 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-light text-foreground mb-1">{totalAssets}</div>
            <div className="text-sm text-muted-foreground">Total Assets</div>
          </div>
          <div>
            <div className="text-2xl font-light text-foreground mb-1">{totalImages}</div>
            <div className="text-sm text-muted-foreground">Images</div>
          </div>
          <div>
            <div className="text-2xl font-light text-foreground mb-1">{totalVideos}</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div>
            <div className="text-2xl font-light text-foreground mb-1">{Object.keys(divisions).length}</div>
            <div className="text-sm text-muted-foreground">Divisions</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
