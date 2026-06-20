"use client";

import { useState } from "react";
import {
  Home,
  MapPin,
  Building2,
  Tag,
  FileText,
  ShieldCheck,
  User,
  Phone,
  ImageIcon,
  Sparkles,
} from "lucide-react";

export default function AddPropertyForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    address: "",
    price: "",
    propertyType: "Apartment",
    category: "Rent",
    featuredLabel: "Featured",
    isFeatured: true,
    bedrooms: "",
    bathrooms: "",
    area: "",
    rating: "",
    image: "",
    description: "",
    shortOverview: "",
    availableFrom: "",
    ownerName: "",
    ownerPhone: "",
    featured1: "",
    featured2: "",
    featured3: "",
    featured4: "",
    featured5: "",
    featured6: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      title: formData.title,
      location: formData.location,
      address: formData.address,
      price: formData.price,
      propertyType: formData.propertyType,
      category: formData.category,
      featuredLabel: formData.featuredLabel,
      isFeatured: formData.isFeatured,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      area: formData.area,
      rating: formData.rating,
      image: formData.image,
      description: formData.description,
      shortOverview: formData.shortOverview,
      availableFrom: formData.availableFrom,
      ownerName: formData.ownerName,
      ownerPhone: formData.ownerPhone,
      amenities: [
        formData.featured1,
        formData.featured2,
        formData.featured3,
        formData.featured4,
        formData.featured5,
        formData.featured6,
      ].filter(Boolean),
    };

    // console.log("Property Submitted:", propertyData);
  };

  return (
    <section className="min-h-screen bg-[#080c16] py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <Sparkles size={16} />Organization Dashboard
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mt-5">
            Add New Property
          </h1>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Add a premium property listing with full details, highlights,
            amenities, and contact information.
          </p>
        </div>

        {/* Form Box */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* top */}
          <div className="border-b border-slate-800 px-6 md:px-8 py-6 bg-gradient-to-r from-blue-950/40 via-slate-900 to-cyan-950/30">
            <h2 className="text-2xl font-bold text-white">
              Property Information
            </h2>
            <p className="text-slate-400 mt-2">
              Fill in the form below to publish a new property listing.
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-10">
            {/* Basic Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Home size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Basic Information
                  </h3>
                  <p className="text-sm text-slate-400">
                    Main property details
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Property Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Luxury Family Apartment"
                />

                <SelectField
                  label="Property Type"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  options={[
                    "Apartment",
                    "Villa",
                    "Studio",
                    "Duplex",
                    "Penthouse",
                    "Office",
                  ]}
                />

                <InputField
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Dhanmondi, Dhaka"
                  icon={<MapPin size={16} />}
                />

                <InputField
                  label="Full Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Road 7, Dhanmondi, Dhaka"
                />

                <InputField
                  label="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="$1,250/mo"
                />

                <SelectField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={["Rent", "Sale", "Lease"]}
                />
              </div>
            </div>

            {/* Property Specs */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Building2 size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Property Specs
                  </h3>
                  <p className="text-sm text-slate-400">
                    Rooms, area, rating and availability
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <InputField
                  label="Bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="3"
                />

                <InputField
                  label="Bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  placeholder="2"
                />

                <InputField
                  label="Area (sqft)"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="1200"
                />

                <InputField
                  label="Rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="4.9"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <InputField
                  label="Available From"
                  name="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={handleChange}
                />

                <InputField
                  label="Image URL"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/property.jpg"
                  icon={<ImageIcon size={16} />}
                />
              </div>
            </div>

            {/* Listing Setup */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Tag size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Listing Setup
                  </h3>
                  <p className="text-sm text-slate-400">
                    Configure featured and listing options
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Featured Badge Text"
                  name="featuredLabel"
                  value={formData.featuredLabel}
                  onChange={handleChange}
                  placeholder="Featured"
                />

                <div>
                  <label className="text-sm font-medium text-slate-300 block mb-2">
                    Featured Listing
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-4 cursor-pointer">
                    <div>
                      <p className="text-white font-medium">Mark as Featured</p>
                      <p className="text-sm text-slate-400">
                        Show special badge and priority styling
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={formData.isFeatured}
                      onChange={handleChange}
                      className="w-5 h-5 accent-cyan-500"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Description & Overview
                  </h3>
                  <p className="text-sm text-slate-400">
                    Add detailed information about the property
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <TextAreaField
                  label="Property Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write full property description..."
                />

                <TextAreaField
                  label="Short Overview / Highlights"
                  name="shortOverview"
                  value={formData.shortOverview}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Modern interior, balcony, secure area..."
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Amenities & Extra Features
                  </h3>
                  <p className="text-sm text-slate-400">
                    Add attractive selling points for the property
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <InputField
                  label="Feature 1"
                  name="featured1"
                  value={formData.featured1}
                  onChange={handleChange}
                  placeholder="24/7 Security"
                />
                <InputField
                  label="Feature 2"
                  name="featured2"
                  value={formData.featured2}
                  onChange={handleChange}
                  placeholder="Parking"
                />
                <InputField
                  label="Feature 3"
                  name="featured3"
                  value={formData.featured3}
                  onChange={handleChange}
                  placeholder="WiFi"
                />
                <InputField
                  label="Feature 4"
                  name="featured4"
                  value={formData.featured4}
                  onChange={handleChange}
                  placeholder="Balcony"
                />
                <InputField
                  label="Feature 5"
                  name="featured5"
                  value={formData.featured5}
                  onChange={handleChange}
                  placeholder="Lift Access"
                />
                <InputField
                  label="Feature 6"
                  name="featured6"
                  value={formData.featured6}
                  onChange={handleChange}
                  placeholder="Nearby Market"
                />
              </div>
            </div>

            {/* Owner Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/15 border border-pink-500/20 flex items-center justify-center text-pink-400">
                  <User size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Owner / Contact Info
                  </h3>
                  <p className="text-sm text-slate-400">
                    Information for the listing owner or manager
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Owner Name"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Owner / Agent name"
                />

                <InputField
                  label="Phone Number"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  placeholder="+8801XXXXXXXXX"
                  icon={<Phone size={16} />}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-900/20 hover:scale-[1.01] transition"
              >
                Publish Property
              </button>

              <button
                type="button"
                className="flex-1 px-6 py-4 rounded-2xl border border-slate-700 bg-slate-950/60 text-slate-200 font-semibold hover:border-cyan-500 hover:text-white transition"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
/* ---------------- Reusable Components ---------------- */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 block mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 transition h-14 ${
            icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 block mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500 transition resize-none"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options = [] }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 block mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 h-14 text-white outline-none focus:border-cyan-500 transition"
      >
        {options.map((item) => (
          <option key={item} value={item} className="bg-slate-900">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
