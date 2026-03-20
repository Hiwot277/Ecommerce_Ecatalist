// ============= DATA =============
const categories = [
  { id: "cat-001", name: "Energy & Vitality", slug: "energy-vitality", description: "Boost your daily energy and restore natural balance." },
  { id: "cat-002", name: "Women's Wellness", slug: "womens-wellness", description: "Targeted nutritional support for women's health." },
  { id: "cat-003", name: "Men's Health", slug: "mens-health", description: "Formulas designed for male vitality and performance." },
  { id: "cat-004", name: "Anti-Aging", slug: "anti-aging", description: "Living well into advanced years, naturally." },
  { id: "cat-005", name: "Bundles & Kits", slug: "bundles-kits", description: "Curated supplement kits for comprehensive wellness." },
];

const products = [
  { id: "prod-001", category_id: "cat-001", name: "NutriMax", slug: "nutrimax", short_description: "Raw material to balance your body.", description: "NutriMax is a premium dietary supplement formulated with 80 capsules of carefully selected raw nutrients designed to restore your body's natural energy and balance.", price: 39.95, compare_at_price: 49.95, sku: "ECT-NM-001", stock_quantity: 250, is_active: true, is_featured: true, unit_count: "80 Capsules" },
  { id: "prod-002", category_id: "cat-005", name: "FemSupport", slug: "femsupport", short_description: "Free yourself from women's problems.", description: "FemSupport is a comprehensive women's wellness bundle featuring Vital-H Women, Max Support, Essential Plus, and NutriMax.", price: 199.95, compare_at_price: 259.80, sku: "ECT-FS-002", stock_quantity: 100, is_active: true, is_featured: true, unit_count: "4-Bottle Kit" },
  { id: "prod-003", category_id: "cat-005", name: "KitPotenci", slug: "kitpotenci", short_description: "Testosterone — it makes you a man.", description: "KitPotenci combines PotenciMax, Potency Plus, and Male Max into one powerful testosterone-support bundle.", price: 149.95, compare_at_price: 189.85, sku: "ECT-KP-003", stock_quantity: 80, is_active: true, is_featured: true, unit_count: "3-Bottle Kit" },
  { id: "prod-004", category_id: "cat-003", name: "MaleMax", slug: "malemax", short_description: "Potency, aphrodisiacs and protection.", description: "MaleMax is a premium dietary supplement formulated to support male vigor, libido, and reproductive health.", price: 59.95, compare_at_price: 74.95, sku: "ECT-MM-004", stock_quantity: 200, is_active: true, is_featured: false, unit_count: "60 Capsules" },
  { id: "prod-005", category_id: "cat-004", name: "Max Support", slug: "max-support", short_description: "Super antioxidant for cellular defense.", description: "Max Support is a powerful antioxidant-rich nutritional supplement designed to combat oxidative stress and support healthy aging.", price: 49.95, compare_at_price: 64.95, sku: "ECT-MS-005", stock_quantity: 180, is_active: true, is_featured: true, unit_count: "60 Capsules" },
  { id: "prod-006", category_id: "cat-002", name: "Vital-H Women", slug: "vital-h-women", short_description: "Complete hormonal harmony for women.", description: "Vital-H Women is a specialized dietary supplement targeting hormonal balance, bone density, and emotional well-being.", price: 54.95, compare_at_price: 69.95, sku: "ECT-VHW-006", stock_quantity: 150, is_active: true, is_featured: false, unit_count: "60 Capsules" },
  { id: "prod-007", category_id: "cat-001", name: "Essential Plus", slug: "essential-plus", short_description: "Daily essential nutrients, elevated.", description: "Essential Plus delivers a comprehensive blend of vitamins, minerals, and trace elements your body needs every day.", price: 44.95, compare_at_price: 54.95, sku: "ECT-EP-007", stock_quantity: 220, is_active: true, is_featured: false, unit_count: "90 Capsules" },
  { id: "prod-008", category_id: "cat-003", name: "PotenciMax", slug: "potencimax", short_description: "Maximum potency, naturally.", description: "PotenciMax is a high-strength male enhancement supplement formulated with tribulus terrestris, maca root, and zinc.", price: 64.95, compare_at_price: 79.95, sku: "ECT-PM-008", stock_quantity: 130, is_active: true, is_featured: false, unit_count: "60 Capsules" },
  { id: "prod-009", category_id: "cat-003", name: "Potency Plus", slug: "potency-plus", short_description: "Enhanced vigor and vitality formula.", description: "Potency Plus combines traditional herbal extracts with modern nutritional science to deliver a powerful boost to male energy.", price: 54.95, compare_at_price: 69.95, sku: "ECT-PP-009", stock_quantity: 140, is_active: true, is_featured: false, unit_count: "60 Capsules" },
];

const tags = [
  { id: "tag-001", name: "Energy", slug: "energy" },
  { id: "tag-002", name: "Balance", slug: "balance" },
  { id: "tag-003", name: "Women's Health", slug: "womens-health" },
  { id: "tag-004", name: "Hormonal Support", slug: "hormonal-support" },
  { id: "tag-005", name: "Men's Health", slug: "mens-health" },
  { id: "tag-006", name: "Testosterone", slug: "testosterone" },
  { id: "tag-007", name: "Libido", slug: "libido" },
  { id: "tag-008", name: "Anti-Aging", slug: "anti-aging" },
  { id: "tag-009", name: "Antioxidant", slug: "antioxidant" },
  { id: "tag-010", name: "Bundle", slug: "bundle" },
  { id: "tag-011", name: "Daily Wellness", slug: "daily-wellness" },
  { id: "tag-012", name: "Vitality", slug: "vitality" },
  { id: "tag-013", name: "Natural", slug: "natural" },
  { id: "tag-014", name: "Aphrodisiac", slug: "aphrodisiac" },
];

const productTags = [
  { product_id: "prod-001", tag_id: "tag-001" },
  { product_id: "prod-001", tag_id: "tag-002" },
  { product_id: "prod-001", tag_id: "tag-011" },
  { product_id: "prod-001", tag_id: "tag-013" },
  { product_id: "prod-002", tag_id: "tag-003" },
  { product_id: "prod-002", tag_id: "tag-004" },
  { product_id: "prod-002", tag_id: "tag-010" },
  { product_id: "prod-002", tag_id: "tag-011" },
  { product_id: "prod-003", tag_id: "tag-005" },
  { product_id: "prod-003", tag_id: "tag-006" },
  { product_id: "prod-003", tag_id: "tag-010" },
  { product_id: "prod-003", tag_id: "tag-012" },
  { product_id: "prod-004", tag_id: "tag-005" },
  { product_id: "prod-004", tag_id: "tag-007" },
  { product_id: "prod-004", tag_id: "tag-014" },
  { product_id: "prod-004", tag_id: "tag-013" },
  { product_id: "prod-005", tag_id: "tag-008" },
  { product_id: "prod-005", tag_id: "tag-009" },
  { product_id: "prod-005", tag_id: "tag-013" },
  { product_id: "prod-006", tag_id: "tag-003" },
  { product_id: "prod-006", tag_id: "tag-004" },
  { product_id: "prod-006", tag_id: "tag-013" },
  { product_id: "prod-007", tag_id: "tag-001" },
  { product_id: "prod-007", tag_id: "tag-011" },
  { product_id: "prod-007", tag_id: "tag-002" },
  { product_id: "prod-008", tag_id: "tag-005" },
  { product_id: "prod-008", tag_id: "tag-006" },
  { product_id: "prod-008", tag_id: "tag-012" },
  { product_id: "prod-009", tag_id: "tag-005" },
  { product_id: "prod-009", tag_id: "tag-012" },
  { product_id: "prod-009", tag_id: "tag-007" },
];

const supplementDetails = [
  { product_id: "prod-001", ingredients: "Vitamin B12, Iron, Magnesium, Zinc, Ashwagandha Root Extract, Ginseng, CoQ10, Biotin", dosage: "Take 2 capsules daily with food and water.", warnings: "Do not exceed recommended dose. Consult a healthcare professional before use if pregnant, nursing, or on medication.", serving_size: "2 Capsules", servings_per_container: 40 },
  { product_id: "prod-004", ingredients: "Tribulus Terrestris, Maca Root, L-Arginine, Zinc, Tongkat Ali, Fenugreek Extract, Vitamin D3, Selenium", dosage: "Take 2 capsules daily, preferably in the morning with breakfast.", warnings: "For adult men only. Do not use if under 18.", serving_size: "2 Capsules", servings_per_container: 30 },
  { product_id: "prod-005", ingredients: "Resveratrol, Vitamin C, Vitamin E, Alpha-Lipoic Acid, Green Tea Extract, Grape Seed Extract, Turmeric Curcumin, Selenium", dosage: "Take 1 capsule twice daily with meals.", warnings: "Consult a healthcare provider before use if you are taking blood-thinning medications.", serving_size: "1 Capsule", servings_per_container: 60 },
  { product_id: "prod-006", ingredients: "Dong Quai, Vitex (Chasteberry), Black Cohosh, Evening Primrose Oil, Calcium, Vitamin D3, Folate, Iron", dosage: "Take 2 capsules daily with a meal.", warnings: "Not recommended during pregnancy.", serving_size: "2 Capsules", servings_per_container: 30 },
  { product_id: "prod-007", ingredients: "Vitamin A, Vitamin C, Vitamin D3, Vitamin E, B-Complex, Calcium, Magnesium, Zinc, Omega-3 Fatty Acids", dosage: "Take 1 capsule three times daily with meals.", warnings: "Do not exceed recommended dosage.", serving_size: "1 Capsule", servings_per_container: 90 },
  { product_id: "prod-008", ingredients: "Tribulus Terrestris (90% Saponins), Maca Root, Zinc Citrate, Horny Goat Weed, Saw Palmetto, Vitamin B6", dosage: "Take 2 capsules daily with water.", warnings: "For adult males only. Discontinue use if adverse reactions occur.", serving_size: "2 Capsules", servings_per_container: 30 },
  { product_id: "prod-009", ingredients: "L-Citrulline, Panax Ginseng, Fenugreek, Ashwagandha, Boron, Vitamin D3, Magnesium", dosage: "Take 2 capsules daily, 30 minutes before activity or with breakfast.", warnings: "Consult physician if on blood pressure medication.", serving_size: "2 Capsules", servings_per_container: 30 },
];

const certifications = [
  { id: "cert-001", name: "GMP Certified" },
  { id: "cert-002", name: "All Natural" },
  { id: "cert-003", name: "Non-GMO" },
  { id: "cert-004", name: "Gluten Free" },
  { id: "cert-005", name: "Third-Party Tested" },
  { id: "cert-006", name: "Vegan Friendly" },
];

const productCertifications = [
  { product_id: "prod-001", certification_id: "cert-001" },
  { product_id: "prod-001", certification_id: "cert-002" },
  { product_id: "prod-001", certification_id: "cert-003" },
  { product_id: "prod-004", certification_id: "cert-001" },
  { product_id: "prod-004", certification_id: "cert-002" },
  { product_id: "prod-004", certification_id: "cert-005" },
  { product_id: "prod-005", certification_id: "cert-001" },
  { product_id: "prod-005", certification_id: "cert-002" },
  { product_id: "prod-005", certification_id: "cert-003" },
  { product_id: "prod-005", certification_id: "cert-006" },
  { product_id: "prod-006", certification_id: "cert-001" },
  { product_id: "prod-006", certification_id: "cert-002" },
  { product_id: "prod-006", certification_id: "cert-004" },
  { product_id: "prod-007", certification_id: "cert-001" },
  { product_id: "prod-007", certification_id: "cert-003" },
  { product_id: "prod-007", certification_id: "cert-004" },
  { product_id: "prod-007", certification_id: "cert-006" },
  { product_id: "prod-008", certification_id: "cert-001" },
  { product_id: "prod-008", certification_id: "cert-002" },
  { product_id: "prod-008", certification_id: "cert-005" },
  { product_id: "prod-009", certification_id: "cert-001" },
  { product_id: "prod-009", certification_id: "cert-002" },
  { product_id: "prod-009", certification_id: "cert-005" },
];

// Helper functions
function getFeaturedProducts() {
  return products.filter(p => p.is_featured && p.is_active);
}
function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}
function getCategory(categoryId) {
  return categories.find(c => c.id === categoryId);
}
function getProductTags(productId) {
  const tagIds = productTags.filter(pt => pt.product_id === productId).map(pt => pt.tag_id);
  return tags.filter(t => tagIds.includes(t.id));
}
function getProductCertifications(productId) {
  const certIds = productCertifications.filter(pc => pc.product_id === productId).map(pc => pc.certification_id);
  return certifications.filter(c => certIds.includes(c.id));
}
function getProductSupplementDetails(productId) {
  return supplementDetails.find(s => s.product_id === productId);
}
