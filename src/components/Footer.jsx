export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#new" className="hover:text-gray-900">New arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-gray-900">Bestsellers</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#sale" className="hover:text-gray-900">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help center</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">Warranty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Get exclusive drops and early access.</p>
            <form className="mt-3 flex">
              <input type="email" placeholder="Your email" className="w-full rounded-l-md border border-gray-200 px-3 py-2 text-sm focus:border-gray-300 focus:outline-none" />
              <button type="submit" className="rounded-r-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-black/5 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TopEnd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
