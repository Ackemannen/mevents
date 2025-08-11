import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:3001/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email skickat!");
        toast.success("Email skickat!");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        throw new Error("Email kunde inte skickas.");
      }
    } catch (error) {
      setStatus("Ett fel uppstod vid skickande av email. Försök igen.");
      toast.error("Ett fel uppstod vid skickande av email. Försök igen.");
      console.log(error, "status" + status);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="!text-4xl md:!text-5xl font-bold text-black mb-6">
            Kontakta Oss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redo att göra ditt nästa event oförglömligt? Hör av dig så hjälper
            vi dig att skapa den perfekta tekniska lösningen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-black shadow-md border-gray-300">
              <CardHeader>
                <CardTitle className="text-xl">Kontaktuppgifter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-gray-600">0702-066184</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">E-post</h4>
                    <p className="text-gray-600">info@mevents.se</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-black shadow-md border-gray-300">
              <CardHeader>
                <CardTitle className="text-xl">Skicka en förfrågan</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-black mb-2 block"
                      >
                        Namn *
                      </label>
                      <Input
                        placeholder="Ditt namn"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="focus:ring-red-400 focus:border-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-black mb-2 block"
                      >
                        E-post *
                      </label>
                      <Input
                        type="email"
                        placeholder="din@email.se"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="focus:ring-red-400 focus:border-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-black mb-2 block"
                      >
                        Telefon
                      </label>
                      <Input
                        placeholder="+46 123 456 789"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="focus:ring-red-400 focus:border-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-2 block">
                      Beskriv evenemanget *
                    </label>
                    <Textarea
                      placeholder="Berätta om ditt event. Ju mer detaljer desto bättre kan vi hjälpa dig."
                      className="min-h-[120px] focus:ring-red-400 focus:border-none"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <Button
                      variant="default"
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="py-6 bg-red-500 text-white !text-lg hover:bg-red-400 hover:scale-105 hover:shadow-lg hover:!shadow-red-400 rounded-xl cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Skickar...
                        </>
                      ) : (
                        "Skicka"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
