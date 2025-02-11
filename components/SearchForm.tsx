import Form from "next/form";
import SearchFormResetBtn from "@/components/SearchFormResetBtn";
import { Search } from "lucide-react";

export default function Page({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startup"
      />
      <div className="flex gap-2">
        {query && <SearchFormResetBtn />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}
