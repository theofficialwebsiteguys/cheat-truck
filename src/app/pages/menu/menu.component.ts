import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dessertPizzas = [
    { name: 'Cookies and Cream', desc: 'Nutella base with crumble Oreo and cream cheese icing' },
    { name: 'Blueberry Crumb', desc: 'Fresh blueberries, homemade icing and crumb cake' },
    { name: "S'mores", desc: 'Nutella base with toasted marshmallows and graham crackers' },
    { name: 'Red Velvet', desc: 'Nutella base with red velvet cookie dough and cream cheese icing' },
    { name: 'Slutty Brownie', desc: 'Nutella base with soft baked cookie dough, brownies, Crumble Oreo, homemade icing and rainbow sprinkles' },
    { name: 'Fruity Pebbles', desc: 'Vanilla icing base topped with fruity pebbles and cream cheese icing' },
    { name: 'Fudge Brownie', desc: 'Warm Nutella base with brownie and chocolate syrup' },
    { name: 'Birthday Cake', desc: 'Funfetti cookie dough cream cheese icing and rainbow sprinkles' },
    { name: 'Apple Caramel Crumb', desc: 'Apple pie, caramel drizzle and crumb cake' },
    { name: 'Cookie Monster', desc: 'Blue vanilla icing base baked with cookie dough Oreo and a Nutella drizzle' },
    { name: 'Cannoli', desc: 'Warm Nutella base with cannoli cream, crushed cannoli shells and chocolate chips' },
    { name: 'Cinnamon Toast Crunch', desc: 'Vanilla icing base topped with Cinnamon Toast Crunch and cream cheese icing' },
    { name: 'Nutella Strawberry and Banana', desc: 'Warm Nutella base with fresh cut strawberry and banana' },
    { name: 'Vanilla or Nutella Cookie Dough', desc: 'Choose between a vanilla icing base or nutella topped with soft baked cookie dough and chocolate syrup' },
  ];

  traditionalToppings = [
    { name: 'Cheese', desc: "New Jersey's finest." },
    { name: 'Chicken Parm', desc: 'Chicken cutlet on signature cheese pizza.' },
    { name: 'Pepperoni', desc: 'Thin sliced pork pepperoni' },
    { name: 'BBQ Chicken', desc: 'Sweet BBQ sauce w/ freshly fried chicken.' },
    { name: 'Sausage', desc: 'Thin sliced sweet italian sausage' },
    { name: 'Veggie', desc: 'Peppers, onions, mushrooms, olives & broccoli.' },
    { name: 'Buffalo Chicken', desc: 'Home made buffalo sauce w/ freshly fried chicken.' },
    { name: 'Penne Vodka', desc: 'Home made vodka sauce w/ penne pasta.' },
    { name: 'Mac & Cheese', desc: 'Home made 3 cheese mac & cheese w/ toasted breadcrumbs and diced scallions.' },
    { name: 'Margherita', desc: 'Sweet marinara w/ garlic, parmesan, fresh mozzarella, and fresh basil.' },
  ];
}
