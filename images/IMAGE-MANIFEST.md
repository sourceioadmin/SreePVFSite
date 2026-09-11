# Image manifest — homepage (`index.html`)

> This file also covers the About/Founders/Media/Contact pages — see the
> [second table](#image-manifest--about--founders--media--contact-us-pages) below.

No WordPress backup or manual image export has been supplied yet, so every image/background slot on
the homepage currently renders `images/placeholder.svg` (content images) or the `.bg-placeholder` CSS
pattern (background-image slots), tagged with a `data-image-slot` key. This table maps each key back to
its best-identified original asset on **https://sreepvf.org/**, so real files can be dropped in later
without re-auditing the page.

**Confidence key:** ✅ confirmed via direct DOM inspection · ⚠️ best-effort match, verify before use.

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `header-logo` | Top bar logo | `/wp-content/uploads/2023/03/Logo-1.png` (500×500, displayed 80×80) | `sreepvf-logo.png` | ✅ |
| `hero-slide-biomedical-bg` | Hero slide 1 background | `/wp-content/uploads/2023/03/Image20230311171137-1.jpg` (1400×809) | `hero-biomedical-sciences.jpg` | ✅ |
| `hero-slide-agricultural-bg` | Hero slide 2 background | `/wp-content/uploads/2023/03/Image20230314100759.jpg` (1400×809) | `hero-agricultural-sciences.jpg` | ✅ |
| `about-collage-back` | About Us — back image (soil/seedling) | `/wp-content/uploads/2023/03/agriculture-blog-1-vp.webp` | `about-soil-seedling.webp` | ⚠️ lazy-loaded src captured before real image swap-in; re-check on live page |
| `about-collage-front` | About Us — front image (lab/petri dishes) | not captured distinctly from `about-collage-back` (see note above) | `about-lab-petri-dish.webp` | ⚠️ verify against live page |
| `grant-icon-biomedical` | "Biomedical Sciences" focus-area card icon | `/wp-content/uploads/2023/03/Image20230309114519.png` (212×202) | `icon-biomedical-sciences.png` | ✅ |
| `grant-icon-agricultural` | "Agricultural Sciences" focus-area card icon | `/wp-content/uploads/2023/03/Image20230309114532.png` (219×162) | `icon-agricultural-sciences.png` | ✅ |
| `stats-icon-grants` | "₹23cr+ In Grants awarded" icon | not captured (small inline icon-box asset) | `icon-stat-grants.png` | ⚠️ verify against live page |
| `stats-icon-applications` | "1330+ Applications received" icon | not captured | `icon-stat-applications.png` | ⚠️ verify against live page |
| `stats-icon-institutes` | "500+ Applicant institutes" icon | not captured | `icon-stat-institutes.png` | ⚠️ verify against live page |
| `video-thumbnail` | "Science with Purpose" video | YouTube embed, title "Chadalawada's Biography English" | — (embed, not a static image) | ⚠️ replace the placeholder with the real `<iframe>` embed once the video ID is confirmed |
| `mission-photo` | "Our Mission at SreePVF" | `/wp-content/uploads/2023/03/Screenshot-2023-03-03-145714.remini-enhanced.jpg` | `mission-community-photo.jpg` | ✅ |
| `founders-photo` | "Meet the Founders" | `/wp-content/uploads/2023/03/Image20230309121004.png` | `founders-photo.png` | ⚠️ two similar candidates on the page (also `SreePVF-1024x1024.png`); verify |
| `testimonial-avatar-1` through `testimonial-avatar-5` | Decorative avatar cluster beside the testimonial carousel | not captured — the five circular photos are a decorative composition, not 1:1 tied to carousel slide index | `testimonial-avatar-1.jpg` … `5.jpg` | ⚠️ verify against live page (people are, in slide order: Dr Ramesh V Sonti, Prof. L S Shashidhara, Prof. D Balasubramanian, Dr. Chadalawada Sudha, Dr. Chadalawada Nageswara Rao) |
| `event-card-1-image` | Upcoming Events slide 1 (also reused on `events.html` — the live site's `/events/` page is the exact same "Upcoming Events" widget, just its own standalone page). Links to the real event detail page, `our-founders-were-recently-awarded-the-2025-dr-y-s-rajasekhara-reddy.html` | `/wp-content/uploads/2025/09/YSR-Award-Photograph.jpeg` (1080×1350) | `home-page-images/YSR-Award-Photograph.jpeg` | ✅ |
| `event-card-2-image` | Upcoming Events slide 2 (also reused on `events.html`). Links to `award-ceremony-2023.html`. Confirmed against the live site that the "sktevents" custom post type has only these 2 real entries — earlier drafting duplicated this slide into `event-card-3-image`/`event-card-4-image` to fill out 4 carousel slots; those duplicate slides were deleted from both `index.html` and `events.html` | `/wp-content/uploads/2023/03/Image20230406125903.png` (688×443, cropped/thumbnail version — the same asset also used full-size as `event-detail-2023-featured` below) | `home-page-images/upcoming-events-image1.png` | ✅ |
| `news-card-1-image` | Homepage "Explore News" — "Translation Accelerator – Day 2 Plenary" (same asset as `blog-post-1-image`) | `/wp-content/uploads/2026/09/day-2-plenary-6aa1123b702fa-212x300.webp` | `blog/day-2-plenary.webp` | ✅ |
| `news-card-2-image` | Homepage "Explore News" — "Translation Accelerator – Day 1 Plenary" (same asset as `blog-post-2-image`) | `/wp-content/uploads/2026/09/day-1-plenary-6aa1121e01d16-212x300.webp` | `blog/day-1-plenary.webp` | ✅ |
| `news-card-3-image` | Homepage "Explore News" — Prof. Sachin Mandavgane / P. K. Bose award (same asset as `blog-post-3-image`) | `/wp-content/uploads/2026/09/sachin-pk-bose-memorial-award-6a96a632aec7f-212x300.webp` | `blog/sachin-pk-bose-memorial-award.webp` | ✅ |
| `news-card-4-image` | Homepage "Explore News" — Dr. Shahid Rasool / The Hindu feature (not a blog post built in this migration — card links to `blog.html`) | `/wp-content/uploads/2026/04/shahid-rasool-thumbnail-69e8611df396a-300x300.webp` | `blog/shahid-rasool-thumbnail.webp` | ✅ |
| `science-advisor-photo` | Professor LS Shashidhara | `/wp-content/uploads/2023/03/LS1-scaled.jpg` | `professor-ls-shashidhara.jpg` | ✅ |
| `board-director-1-photo` | Dr Prasad G Kilaru, MD | `/wp-content/uploads/2020/10/Image20230304180416.png` | `dr-prasad-g-kilaru.png` | ⚠️ order vs. director 2 unconfirmed |
| `board-director-2-photo` | Mr Pinnamaneni Trivikrama Prasad | `/wp-content/uploads/2020/10/Image20230304180645.png` | `pinnamaneni-trivikrama-prasad.png` | ⚠️ order vs. director 1 unconfirmed |

## Image manifest — About / Founders / Media / Contact Us pages

Same placeholder scheme as above (`images/placeholder.svg` + `data-image-slot`), for
`about-us.html`, `founders.html`, `videos.html`, `picture-gallery.html`, and `contact-us.html`.

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `subpage-hero-bg` | Page hero banner background — shared by all five pages below (and reused by the Research/Grants/Awards pages) | `/wp-content/uploads/2023/03/Banner-Images.jpg` | `subpage-hero-banner.jpg` | ✅ |
| `honoree-01-photo` … `honoree-28-photo` | About Us — honoree carousel (28 slides, Dr. Pinnamaneni and Smt. Seethadevi Foundation awardees 1989–2013+). 21 came from the client's supplied `sreepvf Img` folder (original, un-cropped WP uploads — higher quality than the live site's own `592x296`-class display derivatives); the remaining 7 (slides 15, 16, 19, 20, 21, 22, 24 — Abdul Kalam, M.S. Valianthan, Kiran Bedi, C.N.R. Rao, Anji Reddy, E. Sreedharan, Zakir Hussain), not present in that folder, were downloaded directly from the live site to complete the carousel, per client confirmation | `about-us/honorees/honoree-01-prof-v-ramalinga-swamy.png` … `honoree-28-achyuta-samanta.png` (see filenames in that folder for the full name↔slide mapping) | ✅ |
| `founder-sudha-photo` | Founders — Dr Chadalawada Sudha portrait (centered, ~322×320) | `/wp-content/uploads/2023/03/Dr-Sudha.png` | `founder-sudha-photo.png` | ✅ |
| `founder-sudha-timeline` | Founders — Dr Sudha's career/education timeline graphic (left column, tall ~329×815 image, text baked into the image itself) | `/wp-content/uploads/2023/03/1-2.png` | `founder-sudha-timeline.png` | ✅ |
| `founder-nageswara-rao-photo` | Founders — Dr. Chadalawada Nageswara Rao portrait (centered, ~279×372) | `/wp-content/uploads/2023/03/Dra.png` | `founder-nageswara-rao-photo.png` | ✅ |
| `founder-nageswara-rao-timeline` | Founders — Dr. Rao's career/education timeline graphic (left column, tall ~329×815 image, text baked into the image itself) | `/wp-content/uploads/2023/03/Dr-C-Rao-Final.png` | `founder-nageswara-rao-timeline.png` | ✅ |
| `founder-sudha-membership-acog` | Founders — Dr Sudha's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/ACOG.png` | `founder-sudha-membership-acog.png` | ✅ |
| `founder-sudha-membership-royal-college` | Founders — Dr Sudha's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/Royal.png` | `founder-sudha-membership-royal-college.png` | ✅ |
| `founder-sudha-membership-fogsi` | Founders — Dr Sudha's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/FOGSI.png` | `founder-sudha-membership-fogsi.png` | ✅ |
| `founder-sudha-membership-nyas` | Founders — Dr Sudha's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/The-New-York.png` | `founder-sudha-membership-nyas.png` | ✅ |
| `founder-rao-membership-acs` | Founders — Dr. Rao's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/ACS_Logo.jpeg` | `founder-rao-membership-acs.jpeg` | ✅ |
| `founder-rao-membership-apsogus` | Founders — Dr. Rao's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/Logod.png` | `founder-rao-membership-apsogus.png` | ✅ |
| `founder-rao-membership-royal-college` | Founders — Dr. Rao's "Memberships in prestigious associations" logo row (same Royal College logo as Dr Sudha's row) | `/wp-content/uploads/2023/03/Royal.png` | `founder-rao-membership-royal-college.png` | ✅ |
| `founder-rao-membership-usi` | Founders — Dr. Rao's "Memberships in prestigious associations" logo row | `/wp-content/uploads/2023/03/Socity.png` | `founder-rao-membership-usi.png` | ✅ |
| `gallery-photo-001` … `gallery-photo-068` | Picture Gallery — carousel (68 of the live site's 95 distinct photos; see note + individual rows below) | see individual rows | `images/picture-gallery/<original-filename>` | see individual rows |

**Videos page note:** `videos.html` embeds the live site's real YouTube videos directly (published
third-party content, not a missing media asset — see WEBSITE-STANDARDS.md placeholder policy scope).
IDs used: `LXOGvRZtKWM` (Sree Padmavathi Venkateswara Foundation), `ONrb17fjAEQ` (Sree Ramakrishna
Translational Research Grant), `Tlxr5GTE4m0` (AI pest modeling), `n85yEGvbfAc` (post-harvest tech),
`iDOvJJPBKO8` (edible coating tech). No manifest entries needed for these.

**Picture Gallery — individual photo rows:**

The live gallery carousel (an Elementor "Image Carousel" / Swiper widget, not a static grid)
renders 95 distinct photos. 68 of those were supplied in `images/SreePVF Gallery/` and copied into
`images/picture-gallery/`; the 27 below were not supplied and are **intentionally omitted** from
the carousel (per explicit direction — folder contents are being used as-is, no downloads) rather
than left as broken links or placeholders:

`10-400x270.png`, `9-e1680783204121-400x270.png`, `8-e1680783317485-400x270.png`,
`7-e1680783375433-400x270.png`, `6-e1680783397608-400x270.png`, `5-e1680783414707-400x270.png`,
`4-e1680783430509-400x270.png`, `3-e1680783444964-400x270.png`, `2-e1680783467280-400x270.png`,
`1-e1680783483489-400x270.png`, `APJ1-e1680783501910-400x270.png`, `A-1-e1680783540415-400x270.png`,
`A-e1680783635426-400x270.png`, `B-e1680783619108-400x270.png`, `C-e1680783603836-400x270.png`,
`D-1-e1680783567397-400x270.png`, `D-e1680783588818-400x270.png`,
`WhatsApp-Image-2021-07-09-at-12.17.53-PM-1-e1680783657373-400x270.jpeg`,
`img-20230403-wa0036.webp`, `img-20230403-wa0043.webp`, `img-20230403-wa0063.webp` through
`img-20230403-wa0069.webp`. If these are later added to `images/SreePVF Gallery/` (or directly to
`images/picture-gallery/`), insert them at the matching position per the live carousel's real slide
order (captured via DOM inspection, not alphabetical) and renumber the slots below.

<details>
<summary>Expand all 68 rows</summary>

| `data-image-slot` | Where it is | Local file | Original source (sreepvf.org) | Confidence |
|---|---|---|---|---|
| `gallery-photo-001` | Picture Gallery carousel, photo 1 | `images/picture-gallery/img-20230403-wa0052.webp` | — | ✅ |
| `gallery-photo-002` | Picture Gallery carousel, photo 2 | `images/picture-gallery/img-20230403-wa0053.webp` | — | ✅ |
| `gallery-photo-003` | Picture Gallery carousel, photo 3 | `images/picture-gallery/img-20230403-wa0054.webp` | — | ✅ |
| `gallery-photo-004` | Picture Gallery carousel, photo 4 | `images/picture-gallery/img-20230403-wa0055-1.webp` | — | ✅ |
| `gallery-photo-005` | Picture Gallery carousel, photo 5 | `images/picture-gallery/img-20230403-wa0057.webp` | — | ✅ |
| `gallery-photo-006` | Picture Gallery carousel, photo 6 | `images/picture-gallery/img-20230403-wa0058.webp` | — | ✅ |
| `gallery-photo-007` | Picture Gallery carousel, photo 7 | `images/picture-gallery/img-20230403-wa0059.webp` | — | ✅ |
| `gallery-photo-008` | Picture Gallery carousel, photo 8 | `images/picture-gallery/img-20230403-wa0060.webp` | — | ✅ |
| `gallery-photo-009` | Picture Gallery carousel, photo 9 | `images/picture-gallery/img-20230403-wa0061.webp` | — | ✅ |
| `gallery-photo-010` | Picture Gallery carousel, photo 10 | `images/picture-gallery/img-20230403-wa0062.webp` | — | ✅ |
| `gallery-photo-011` | Picture Gallery carousel, photo 11 | `images/picture-gallery/img-20230403-wa0070.webp` | — | ✅ |
| `gallery-photo-012` | Picture Gallery carousel, photo 12 | `images/picture-gallery/img-20230403-wa0071.webp` | — | ✅ |
| `gallery-photo-013` | Picture Gallery carousel, photo 13 | `images/picture-gallery/img-20230403-wa0072.webp` | — | ✅ |
| `gallery-photo-014` | Picture Gallery carousel, photo 14 | `images/picture-gallery/img-20230403-wa0073.webp` | — | ✅ |
| `gallery-photo-015` | Picture Gallery carousel, photo 15 | `images/picture-gallery/img-20230403-wa0074.webp` | — | ✅ |
| `gallery-photo-016` | Picture Gallery carousel, photo 16 | `images/picture-gallery/img-20230403-wa0075.webp` | — | ✅ |
| `gallery-photo-017` | Picture Gallery carousel, photo 17 | `images/picture-gallery/img-20230403-wa0076.webp` | — | ✅ |
| `gallery-photo-018` | Picture Gallery carousel, photo 18 | `images/picture-gallery/img-20230403-wa0077.webp` | — | ✅ |
| `gallery-photo-019` | Picture Gallery carousel, photo 19 | `images/picture-gallery/img-20230403-wa0078.webp` | — | ✅ |
| `gallery-photo-020` | Picture Gallery carousel, photo 20 | `images/picture-gallery/img-20230403-wa0079.webp` | — | ✅ |
| `gallery-photo-021` | Picture Gallery carousel, photo 21 | `images/picture-gallery/img-20230403-wa0080.webp` | — | ✅ |
| `gallery-photo-022` | Picture Gallery carousel, photo 22 | `images/picture-gallery/img-20230403-wa0081.webp` | — | ✅ |
| `gallery-photo-023` | Picture Gallery carousel, photo 23 | `images/picture-gallery/img-20230403-wa0082.webp` | — | ✅ |
| `gallery-photo-024` | Picture Gallery carousel, photo 24 | `images/picture-gallery/img-20230403-wa0083.webp` | — | ✅ |
| `gallery-photo-025` | Picture Gallery carousel, photo 25 | `images/picture-gallery/img-20230403-wa0084.webp` | — | ✅ |
| `gallery-photo-026` | Picture Gallery carousel, photo 26 | `images/picture-gallery/img-20230403-wa0085.webp` | — | ✅ |
| `gallery-photo-027` | Picture Gallery carousel, photo 27 | `images/picture-gallery/img-20230403-wa0086.webp` | — | ✅ |
| `gallery-photo-028` | Picture Gallery carousel, photo 28 | `images/picture-gallery/img-20230403-wa0087.webp` | — | ✅ |
| `gallery-photo-029` | Picture Gallery carousel, photo 29 | `images/picture-gallery/img-20230403-wa0088.webp` | — | ✅ |
| `gallery-photo-030` | Picture Gallery carousel, photo 30 | `images/picture-gallery/img-20230403-wa0089.webp` | — | ✅ |
| `gallery-photo-031` | Picture Gallery carousel, photo 31 | `images/picture-gallery/img-20230403-wa0090.webp` | — | ✅ |
| `gallery-photo-032` | Picture Gallery carousel, photo 32 | `images/picture-gallery/img-20230403-wa0091.webp` | — | ✅ |
| `gallery-photo-033` | Picture Gallery carousel, photo 33 | `images/picture-gallery/img-20230403-wa0092.webp` | — | ✅ |
| `gallery-photo-034` | Picture Gallery carousel, photo 34 | `images/picture-gallery/img-20230403-wa0013.webp` | — | ✅ |
| `gallery-photo-035` | Picture Gallery carousel, photo 35 | `images/picture-gallery/img-20230403-wa0015.webp` | — | ✅ |
| `gallery-photo-036` | Picture Gallery carousel, photo 36 | `images/picture-gallery/img-20230403-wa0046.webp` | — | ✅ |
| `gallery-photo-037` | Picture Gallery carousel, photo 37 | `images/picture-gallery/img-20230403-wa0047.webp` | — | ✅ |
| `gallery-photo-038` | Picture Gallery carousel, photo 38 | `images/picture-gallery/img-20230403-wa0048.webp` | — | ✅ |
| `gallery-photo-039` | Picture Gallery carousel, photo 39 | `images/picture-gallery/img-20230403-wa0049.webp` | — | ✅ |
| `gallery-photo-040` | Picture Gallery carousel, photo 40 | `images/picture-gallery/img-20230403-wa0050.webp` | — | ✅ |
| `gallery-photo-041` | Picture Gallery carousel, photo 41 | `images/picture-gallery/img-20230403-wa0051.webp` | — | ✅ |
| `gallery-photo-042` | Picture Gallery carousel, photo 42 | `images/picture-gallery/image20230407112030.webp` | — | ✅ |
| `gallery-photo-043` | Picture Gallery carousel, photo 43 | `images/picture-gallery/img-20230403-wa0016.webp` | — | ✅ |
| `gallery-photo-044` | Picture Gallery carousel, photo 44 | `images/picture-gallery/img-20230403-wa0017.webp` | — | ✅ |
| `gallery-photo-045` | Picture Gallery carousel, photo 45 | `images/picture-gallery/img-20230403-wa0018.webp` | — | ✅ |
| `gallery-photo-046` | Picture Gallery carousel, photo 46 | `images/picture-gallery/img-20230403-wa0019.webp` | — | ✅ |
| `gallery-photo-047` | Picture Gallery carousel, photo 47 | `images/picture-gallery/img-20230403-wa0020.webp` | — | ✅ |
| `gallery-photo-048` | Picture Gallery carousel, photo 48 | `images/picture-gallery/img-20230403-wa0021.webp` | — | ✅ |
| `gallery-photo-049` | Picture Gallery carousel, photo 49 | `images/picture-gallery/img-20230403-wa0022.webp` | — | ✅ |
| `gallery-photo-050` | Picture Gallery carousel, photo 50 | `images/picture-gallery/img-20230403-wa0023.webp` | — | ✅ |
| `gallery-photo-051` | Picture Gallery carousel, photo 51 | `images/picture-gallery/img-20230403-wa0024.webp` | — | ✅ |
| `gallery-photo-052` | Picture Gallery carousel, photo 52 | `images/picture-gallery/img-20230403-wa0025.webp` | — | ✅ |
| `gallery-photo-053` | Picture Gallery carousel, photo 53 | `images/picture-gallery/img-20230403-wa0026.webp` | — | ✅ |
| `gallery-photo-054` | Picture Gallery carousel, photo 54 | `images/picture-gallery/img-20230403-wa0032.webp` | — | ✅ |
| `gallery-photo-055` | Picture Gallery carousel, photo 55 | `images/picture-gallery/img-20230403-wa0031.webp` | — | ✅ |
| `gallery-photo-056` | Picture Gallery carousel, photo 56 | `images/picture-gallery/img-20230403-wa0030.webp` | — | ✅ |
| `gallery-photo-057` | Picture Gallery carousel, photo 57 | `images/picture-gallery/img-20230403-wa0029.webp` | — | ✅ |
| `gallery-photo-058` | Picture Gallery carousel, photo 58 | `images/picture-gallery/img-20230403-wa0028.webp` | — | ✅ |
| `gallery-photo-059` | Picture Gallery carousel, photo 59 | `images/picture-gallery/img-20230403-wa0027.webp` | — | ✅ |
| `gallery-photo-060` | Picture Gallery carousel, photo 60 | `images/picture-gallery/img-20230403-wa0033.webp` | — | ✅ |
| `gallery-photo-061` | Picture Gallery carousel, photo 61 | `images/picture-gallery/img-20230403-wa0034.webp` | — | ✅ |
| `gallery-photo-062` | Picture Gallery carousel, photo 62 | `images/picture-gallery/img-20230403-wa0035.webp` | — | ✅ |
| `gallery-photo-063` | Picture Gallery carousel, photo 63 | `images/picture-gallery/img-20230403-wa0038.webp` | — | ✅ |
| `gallery-photo-064` | Picture Gallery carousel, photo 64 | `images/picture-gallery/img-20230403-wa0045.webp` | — | ✅ |
| `gallery-photo-065` | Picture Gallery carousel, photo 65 | `images/picture-gallery/img-20230403-wa0044.webp` | — | ✅ |
| `gallery-photo-066` | Picture Gallery carousel, photo 66 | `images/picture-gallery/img-20230403-wa0042.webp` | — | ✅ |
| `gallery-photo-067` | Picture Gallery carousel, photo 67 | `images/picture-gallery/img-20230403-wa0041.webp` | — | ✅ |
| `gallery-photo-068` | Picture Gallery carousel, photo 68 | `images/picture-gallery/img-20230403-wa0040.webp` | — | ✅ |

</details>

## Image manifest — Biomedical Awards / Agricultural Awards / SreePVF Essay Contests pages

Same placeholder scheme as above, for `biomedical-awards.html`, `agricultural-awards.html`, and
`sreepvf-essay-contests.html`. All three also use the shared `subpage-hero-bg` slot (see first table).

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `biomed-award-2019-vaidya-photo` | Biomedical Awards — Prof. Vidita Vaidya, 2019 | `/wp-content/uploads/2023/03/Image20230313125204.jpg` (248×245) | `biomed-award-2019-vaidya-photo.jpg` | ✅ |
| `biomed-award-2020-sharma-photo` | Biomedical Awards — Dr. Vandana Sharma, 2020 | `/wp-content/uploads/2023/03/Image20230313125220.jpg` | `biomed-award-2020-sharma-photo.jpg` | ✅ |
| `biomed-award-2021-pati-photo` | Biomedical Awards — Dr. Falguni Pati, 2021 | `/wp-content/uploads/2023/03/Image20230313125227.jpg` | `biomed-award-2021-pati-photo.jpg` | ✅ |
| `biomed-award-2022-chaturvedi-photo` | Biomedical Awards — Dr. Akanksha Chaturvedi, 2022 | `/wp-content/uploads/2023/03/Image20230313125230.jpg` | `biomed-award-2022-chaturvedi-photo.jpg` | ✅ |
| `biomed-award-2022-padhi-photo` | Biomedical Awards — Prof. Radhakant Padhi, 2022 | `/wp-content/uploads/2023/03/Image20230313125223.jpg` | `biomed-award-2022-padhi-photo.jpg` | ✅ |
| `biomed-award-2023-ghosh-photo` | Biomedical Awards — Dr. Ambarish Ghosh, 2023 | `/wp-content/uploads/2024/04/image20240403154207-660d2b961d3b9.webp` | `biomed-award-2023-ghosh-photo.webp` | ✅ |
| `biomed-award-2023-ramkumar-photo` | Biomedical Awards — Dr. Vidya Ramkumar, 2023 | `/wp-content/uploads/2024/04/image20240403154211-660d2b95e28fa.webp` | `biomed-award-2023-ramkumar-photo.webp` | ✅ |
| `biomed-award-2024-giri-photo` | Biomedical Awards — Dr. Jyotsnendu Giri, 2024 | `/wp-content/uploads/2025/04/1-680ccc9d30590.webp` | `biomed-award-2024-giri-photo.webp` | ✅ |
| `biomed-award-2024-anirudhan-photo` | Biomedical Awards — Dr Arun Anirudhan V, 2024 | `/wp-content/uploads/2025/04/2-680ccca1cdc15.webp` | `biomed-award-2024-anirudhan-photo.webp` | ✅ |
| `biomed-award-2024-packirisamy-photo` | Biomedical Awards — Dr Gopinath Packirisamy, 2024 | `/wp-content/uploads/2025/04/3-680ccca7cb0d5.webp` | `biomed-award-2024-packirisamy-photo.webp` | ✅ |
| `biomed-award-2025-govindarajan-photo` | Biomedical Awards — Dr. Sutharsan Govindarajan, 2025 | `/wp-content/uploads/2026/04/dr-sutharsan-govindarajan-69e61c2788665-e1776830605840.webp` | `biomed-award-2025-govindarajan-photo.webp` | ✅ |
| `agri-award-2021-kapuganti-photo` | Agricultural Awards — Dr. Jagadis Gupta Kapuganti, 2021 | `/wp-content/uploads/2023/03/Dr-Jagadis-Gupta-Kapugant.png` | `agri-award-2021-kapuganti-photo.png` | ✅ |
| `agri-award-2022-lavanya-kumari-photo` | Agricultural Awards — Dr. P. Lavanya Kumari, 2022 | `/wp-content/uploads/2023/03/Dr.-P.-Lavanya-Kumari.png` | `agri-award-2022-lavanya-kumari-photo.png` | ✅ |
| `agri-award-2022-mazumder-photo` | Agricultural Awards — Dr. Koushik Mazumder, 2022 | `/wp-content/uploads/2023/03/Dr.-Koushik-Mazumder.png` | `agri-award-2022-mazumder-photo.png` | ✅ |
| `agri-award-2023-mandavgane-photo` | Agricultural Awards — Dr. Sachin A Mandavgane, 2023 | `/wp-content/uploads/2023/08/Sachin-Mandavgane-Professor-Dept-of-Chemical-Engineering-VNIT-Nagpur.jpg` | `agri-award-2023-mandavgane-photo.jpg` | ✅ |
| `agri-award-2023-ambatipudi-photo` | Agricultural Awards — Dr. Srinivas Kiran Ambatipudi, 2023 | `/wp-content/uploads/2023/08/KA-Picture.jpg` | `agri-award-2023-ambatipudi-photo.jpg` | ✅ |
| `agri-award-2023-dhir-photo` | Agricultural Awards — Dr. Sunny Dhir, 2023 | `/wp-content/uploads/2023/08/1.-Dr.-Sunny-Dhir-Project-Co-ordinator.jpg` | `agri-award-2023-dhir-photo.jpg` | ✅ |
| `agri-award-2024-sailaja-photo` | Agricultural Awards — Dr B. Sailaja, 2024 | `/wp-content/uploads/2024/08/image20240831181241-66d30fd81c21c.webp` | `agri-award-2024-sailaja-photo.webp` | ✅ |
| `agri-award-2024-jangir-photo` | Agricultural Awards — Dr Himanshi Jangir, 2024 | `/wp-content/uploads/2024/08/image20240831180230-66d30d8d6c621.webp` | `agri-award-2024-jangir-photo.webp` | ✅ |
| `agri-award-2024-rasool-photo` | Agricultural Awards — Dr Shahid Rasool, 2024 | `/wp-content/uploads/2024/08/dr-shahid1-66d30d8c6107c-scaled.webp` | `agri-award-2024-rasool-photo.webp` | ✅ |
| `agri-award-2025-chakrabarty-photo` | Agricultural Awards — Dr. Arindam Chakrabarty, 2025 | `/wp-content/uploads/2025/10/Arindam-profile-photo-scaled-e1759831051671.jpeg` | `agri-award-2025-chakrabarty-photo.jpeg` | ✅ |
| `agri-award-2025-muthappa-photo` | Agricultural Awards — Dr. Senthil-Kumar Muthappa, 2025 | `/wp-content/uploads/2025/10/Muthappa-Senthil-Kumar-scaled.jpg` | `agri-award-2025-muthappa-photo.jpg` | ✅ |
| `essay-contest-2021-book-cover` | Essay Contests — 1st thumbnail | `/wp-content/uploads/2023/03/Essay-Contest-Book-2021-Cover.jpg` (476×640) | `essay-contest-2021-book-cover.jpg` | ✅ |
| `essay-contest-award-1-cover` | Essay Contests — 2nd thumbnail | `/wp-content/uploads/2023/03/Award-1.jpg` (476×640) | `essay-contest-award-1-cover.jpg` | ✅ |
| `essay-contest-award-3-cover` | Essay Contests — 3rd thumbnail (DOM order is Cover→1→3→2, not sequential — preserved) | `/wp-content/uploads/2023/03/Award-3.jpg` (476×640) | `essay-contest-award-3-cover.jpg` | ✅ |
| `essay-contest-award-2-cover` | Essay Contests — 4th thumbnail | `/wp-content/uploads/2023/03/Award-2.jpg` (476×640) | `essay-contest-award-2-cover.jpg` | ✅ |

**Essay Contests PDF files** (not images — the 4 thumbnails above each link to one of these; hrefs
are `#` in `sreepvf-essay-contests.html` until the real files are downloaded and dropped into the
project, e.g. under a new `files/` folder, then wired to the matching `data-pdf-slot`):

| `data-pdf-slot` | Source PDF (sreepvf.org) |
|---|---|
| `essay-contest-2021-book-pdf` | `https://sreepvf.org/wp-content/uploads/2023/03/Essay-Contest-Book-2021.pdf` |
| `essay-contest-award-1-pdf` | `https://sreepvf.org/wp-content/uploads/2023/03/SPVF.pdf` |
| `essay-contest-award-3-pdf` | `https://sreepvf.org/wp-content/uploads/2023/03/Awards-book-2019.pdf` |
| `essay-contest-award-2-pdf` | `https://sreepvf.org/wp-content/uploads/2023/03/Awards-book-2018.pdf` |

**Note on awardee names:** every awardee name on the live Biomedical/Agricultural Awards pages
links to a per-year detail page (e.g. `/biomedical-research-grant-awardee-2019`). Those detail
pages are out of scope for this pass — names are rendered as plain (non-link) text in
`biomedical-awards.html`/`agricultural-awards.html` rather than pointing at pages that don't exist
yet. Revisit if/when those detail pages get built.

## Image manifest — Research Grants / Biomedical Science / Agricultural Science pages

Same placeholder scheme as above, for `research-grants.html`, `biomedical-science.html`, and
`agricultural-science.html`. All three also use the shared `subpage-hero-bg` slot. A live-site
investigation reached the limits of what it could individually confirm for several committee-member
photos (marked ⚠️ below) — worth a follow-up pass against the live pages before dropping in real
files.

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `research-grants-intro-photo` | Research Grants — intro split-section | `/wp-content/uploads/2023/03/Research-Grant.jpg` (1024×637) | `research-grants-intro-photo.jpg` | ✅ |
| `biomedical-timeline-graphic` | Biomedical Science — "Important Timeline" | `/wp-content/uploads/2025/07/image20250707120638-686b6b154cd59.webp` (1536×934) | `biomedical-timeline-graphic.webp` | ✅ |
| `agricultural-intro-photo` | Agricultural Science — intro split-section | `/wp-content/uploads/2023/03/Cells.png` | `agricultural-intro-photo.png` | ⚠️ exact displayed dimensions not re-confirmed |
| `agricultural-timeline-graphic` | Agricultural Science — "Important Timeline" | `/wp-content/uploads/2026/04/image20260415181113-69df8779390e1.webp` (1536×934) | `agricultural-timeline-graphic.webp` | ✅ |
| `committee-chair-photo-agri` | Agricultural Science — Chair (Prof. Ramesh V. Sonti) | not individually captured | `committee-chair-photo-agri.jpg` | ⚠️ verify against live page |
| `committee-agri-current-shashidhara-photo` | Agricultural Science — "Members (2025 Onwards)" slider | shares `LS1`-family photo with `committee-chair-photo` — verify | `committee-agri-current-shashidhara-photo.jpg` | ⚠️ verify against live page |
| `committee-agri-current-sujatha-photo` | Agricultural Science — "Members (2025 Onwards)" slider | not individually captured | `committee-agri-current-sujatha-photo.jpg` | ⚠️ verify against live page |
| `committee-agri-current-kalra-photo` | Agricultural Science — "Members (2025 Onwards)" slider | `/wp-content/uploads/.../Dr-Alok-Kalra-300x300.png` | `committee-agri-current-kalra-photo.png` | ✅ |
| `committee-agri-current-sreeman-photo` | Agricultural Science — "Members (2025 Onwards)" slider | `professor-sheshshayee-sreeman-…webp` (exact path not fully captured) | `committee-agri-current-sreeman-photo.webp` | ⚠️ verify against live page |
| `committee-agri-current-sudharani-photo` | Agricultural Science — "Members (2025 Onwards)" slider | `Professor-V-Sudharani-300x300.webp` (exact path not fully captured) | `committee-agri-current-sudharani-photo.webp` | ⚠️ verify against live page |
| `committee-agri-legacy-1-photo` | Agricultural Science — "Members (2021-2024)" slider — Professor L S Shashidhara | `images/biomedical-science-image/chair-main-image.jpg` (same photo as the current-committee slide) | — | ✅ |
| `committee-agri-legacy-2-photo` | Agricultural Science — "Members (2021-2024)" slider — Dr Alok Kalra | `images/Agricultural-science-image/Dr-Alok-Kalra-300x300.png` (same photo as the current-committee slide) | — | ✅ |
| `committee-agri-legacy-3-photo` | Agricultural Science — "Members (2021-2024)" slider — Dr M. Sujatha | `images/Agricultural-science-image/dr-m-sujata.png` (same photo as the current-committee slide) | — | ✅ |
| `committee-agri-legacy-4-photo` | Agricultural Science — "Members (2021-2024)" slider — Dr Navin Sharma | `images/Agricultural-science-image/Dr-Navin-Sharma-245x245.png` | — | ✅ |
| `committee-agri-legacy-5-photo` | Agricultural Science — "Members (2021-2024)" slider — Dr Alok Krishna Sinha | `images/Agricultural-science-image/Alok-Kishore-Sinha-176x176.jpg` | — | ✅ |
| `committee-staff-ponnari-gottipati-photo` | Agricultural Science — Staff | not individually captured | `committee-staff-ponnari-gottipati-photo.jpg` | ⚠️ verify against live page |
| `committee-staff-amit-das-photo` | Agricultural Science — Staff | not individually captured | `committee-staff-amit-das-photo.jpg` | ⚠️ verify against live page |
| `committee-staff-gayathri-sreedharan-photo` | Agricultural Science — Staff | not individually captured | `committee-staff-gayathri-sreedharan-photo.jpg` | ⚠️ verify against live page |

**Non-image downloadable files** (Terms &amp; Conditions PDF, preliminary-application forms) — hrefs
are `#` in the pages above until the real files are downloaded and dropped in, matching the
Essay Contests PDF pattern:

| `data-pdf-slot` / `data-download-slot` | Source (sreepvf.org) |
|---|---|
| `biomedical-terms-conditions-pdf`, `agricultural-terms-conditions-pdf` | `https://sreepvf.org/wp-content/uploads/2026/03/Sree-PVF_Grant-TC-Agreement_Jan-2026_v1.pdf` (same file, used on both pages) |
| `biomedical-preliminary-application-doc` | `https://sreepvf.org/wp-content/uploads/2025/07/SreePVF-Preliminary-Application-Form.doc` |
| `agricultural-preliminary-application-pptx` | `https://sreepvf.org/wp-content/uploads/2026/03/Preliminary-application-format_Sree-PVF-Grants-for-Agriculture-2026.pptx` |

**Note on "Previous Awardees"/"Awardees" years:** same as the Biomedical/Agricultural Awards pages
— each year links to a per-year detail page on the live site that's out of scope for this
migration pass, so years render as plain bold text here rather than dead links.

**Note on dead/hidden content:** the live `research-grants.html` page contains a large block of
"Biomedical Sciences"/"Agricultural Sciences" write-up content (intro text, evaluation process,
full committee rosters) that carries `elementor-hidden-desktop/tablet/mobile` on every wrapper —
i.e. it's permanently hidden at every breakpoint and never rendered for real visitors. This was
deliberately **not** reproduced, per WEBSITE-STANDARDS.md's warning against replicating dead
leftover markup.

## Image manifest — Blog page

| `blog-post-1-image` | Blog — "Translation Accelerator – Day 2 Plenary" card thumbnail | `/wp-content/uploads/2026/09/day-2-plenary-6aa1123b702fa-212x300.webp` (same asset as the homepage's `news-card-1-image`) | `blog/day-2-plenary.webp` | ✅ |
| `blog-post-2-image` | Blog — "Translation Accelerator – Day 1 Plenary" card thumbnail | `/wp-content/uploads/2026/09/day-1-plenary-6aa1121e01d16-212x300.webp` (same asset as the homepage's `news-card-2-image`) | `blog/day-1-plenary.webp` | ✅ |
| `blog-post-3-image` | Blog — Prof. Sachin Mandavgane / P. K. Bose award card thumbnail | `/wp-content/uploads/2026/09/sachin-pk-bose-memorial-award-6a96a632aec7f-212x300.webp` (same asset as the homepage's `news-card-3-image`) | `blog/sachin-pk-bose-memorial-award.webp` | ✅ |
| (author avatar, all 4 cards) | Blog — "devadmin" author avatar (Gravatar, reused on every card) | `https://secure.gravatar.com/avatar/03ef8490d1df7606dcac3cf3be9c9881d20666d79300a5484140459f62f9831d?s=96&d=mm&r=g` | `blog/author-devadmin-avatar.jpg` | ✅ |

Note: the live site's 4th blog post ("SreePVF is organising the Translation Accelerator Meeting
this year at NCBS.") genuinely has no featured image — confirmed via DOM inspection, not an
oversight — so its card is reproduced without a thumbnail.

## Image manifest — Individual blog post pages

Four singular-post pages, matching the live site's post template (title, meta, body, in-content
image where the live post has one, tag, Previous/Next post nav) — one page per URL the client
supplied. Live prev/next nav is scoped to same-category posts; targets outside these 4 (an older
"Latest Announcement" post and an older "News" post) are out of scope for this migration and were
omitted rather than linked to non-existent pages, per the same approach used for out-of-scope
awardee-detail links in `award-entry` (components.css).

| Slot | Description | Live source URL | Local file | Status |
|---|---|---|---|---|
| `blog-post-ncbs-poster` | `sreepvf-is-organising-the-translation-accelerator-meeting-this-year-at-ncbs.html` — in-body poster image (this post has no Prev/Next nav on the live site — its only nav target is an out-of-scope older post) | `/wp-content/uploads/2026/09/research-translation-accelerator-poster-6a96a5323c3f4-724x1024.webp` | `blog/research-translation-accelerator-poster.webp` | ✅ |
| (none) | `congratulations-to-prof-sachin-mandavgane-on-receiving-the-professor-p-k-bose-memorial-award-2025.html` — genuinely has no body image on the live singular template (its grid thumbnail, `blog-post-3-image`, is used only in the nav-box on Day 1 Plenary's page, reused as-is) | — | — | ✅ (confirmed no image) |
| `blog-post-day1-image` | `translation-accelerator-day-1-plenary.html` — in-body plenary poster | `/wp-content/uploads/2026/09/day-1-plenary-6aa1121e01d16-724x1024.webp` (larger size than the `blog-post-2-image` grid thumbnail) | `blog/day-1-plenary-large.webp` | ✅ |
| `blog-post-day2-image` | `translation-accelerator-day-2-plenary.html` — in-body plenary poster | `/wp-content/uploads/2026/09/day-2-plenary-6aa1123b702fa-724x1024.webp` (larger size than the `blog-post-1-image` grid thumbnail) | `blog/day-2-plenary-large.webp` | ✅ |

Post-nav thumbnails (the small 70×70 Previous/Next post images) reuse the existing grid-thumbnail
files (`day-1-plenary.webp`, `day-2-plenary.webp`, `sachin-pk-bose-memorial-award.webp`) already
listed above rather than downloading separate copies of the live site's own 150×150 nav thumbnails.

Archives/Categories sidebar widgets on these pages reproduce the live site's list content
(month/category names) as plain text rather than links — the live site's archive-by-date and
archive-by-category pages are out of scope for this migration (no such pages exist here), same
treatment as the disabled Search widget on `blog.html`.

## Image manifest — Individual event detail pages

Two singular-event pages, matching the live "sktevents" custom post type template (title,
calendar/location meta, single full-width column with the featured image floated left and body
text wrapping around it — no sidebar, unlike blog posts). Confirmed directly against the live site
that these are the only 2 real events; the Upcoming Events carousels on `index.html` and
`events.html` previously had 2 duplicate slides of the 2023 ceremony, now removed (see the
`event-card-2-image` note above).

| Slot | Description | Live source URL | Local file | Status |
|---|---|---|---|---|
| `event-detail-ysr-photo` | `our-founders-were-recently-awarded-the-2025-dr-y-s-rajasekhara-reddy.html` — floated featured photo (reuses the same file already used as `event-card-1-image`) | `/wp-content/uploads/2025/09/YSR-Award-Photograph.jpeg` | `home-page-images/YSR-Award-Photograph.jpeg` | ✅ |
| `event-detail-2023-featured` | `award-ceremony-2023.html` — floated featured photo | `/wp-content/uploads/2023/03/Image20230406125903.png` (full size, not the 300×193 thumbnail used elsewhere) | `events/award-ceremony-2023-featured.png` | ✅ |
| `event-detail-2023-jitendra-singh` | `award-ceremony-2023.html` — in-body photo of Dr. Jitendra Singh addressing the ceremony | `/wp-content/uploads/2023/04/img-20230403-wa0077.webp` | `events/award-ceremony-2023-jitendra-singh.webp` | ✅ |
| `event-detail-2023-audience` | `award-ceremony-2023.html` — in-body audience photo | `/wp-content/uploads/2023/03/Image20230406130151.png` | `events/award-ceremony-2023-audience.png` | ✅ |
| `event-detail-2023-press-coverage` | `award-ceremony-2023.html` — PIB news-clipping scan ("India's StartUps setting global benchmarks") | `/wp-content/uploads/2023/04/Press-coverage.jpg` | `events/award-ceremony-2023-press-coverage.jpg` | ✅ |
| `event-detail-2023-gallery-1`, `event-detail-2023-gallery-2` | `award-ceremony-2023.html` — 2-image "glimpses of the event" slider (live site uses a MetaSlider widget at a fixed 500×600 box; rebuilt as a Bootstrap carousel at the same size, per WEBSITE-STANDARDS.md functional-equivalence guidance) | `/wp-content/uploads/2023/04/Image20230412132602-500x600.jpg`, `.../Image20230412132551-500x600.jpg` | `events/award-ceremony-2023-gallery-1.jpg`, `events/award-ceremony-2023-gallery-2.jpg` | ✅ |

The live 2023 ceremony post also links out to an external PIB press-release URL and to
`/picture-gallery/` ("You can catch some glimpses of the event here") — the PIB link is kept as a
real external link, and the picture-gallery link now points at our own `picture-gallery.html`.

## How to replace a placeholder

1. Save the real file into `images/` using the recommended filename above (or your own — just keep it
   kebab-case and descriptive, per WEBSITE-STANDARDS.md §4).
2. Find the element by its `data-image-slot` value in the relevant page (`index.html`,
   `about-us.html`, `founders.html`, `videos.html`, `picture-gallery.html`, or `contact-us.html` —
   `subpage-hero-bg` appears in all five of the latter).
3. For a content `<img>`: change `src="images/placeholder.svg"` to the new path and remove the
   `img-placeholder` class.
4. For a background slot (`.bg-placeholder`, e.g. the two hero slides and the video frame): remove the
   `bg-placeholder` class and `data-placeholder-label` attribute, and add an inline
   `style="background-image:url('images/your-file.jpg'); background-size:cover; background-position:center;"`
   (or move the rule into `css/pages/index.css`).
5. Delete that row from this manifest once it's done, so the file always reflects what's still
   outstanding.
